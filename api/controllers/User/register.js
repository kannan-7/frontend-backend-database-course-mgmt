import pool from "../../database/connection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const query = `
INSERT INTO students (name, email, username, password)
VALUES ($1, $2, $3, $4)
RETURNING student_id, name, email, username, registration_date
`;

async function registerUser(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  if (!name || !email || !username || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  // convert password to hash
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const resDb = await pool.query(query, [
      name,
      email,
      username,
      hashedPassword,
    ]);
    const studentDb = resDb.rows[0];
    const data = {
      message: "User registered successfully",
      data: {
        studentId: studentDb.id,
        name: studentDb.name,
        email: studentDb.email,
        username: studentDb.username,
        registration_date: studentDb.registration_date,
      },
    };
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

async function loginUser(req, res) {
  const selectStudentSQL = "SELECT * FROM students WHERE username = $1";
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const resDb = await pool.query(selectStudentSQL, [username]);
    if (resDb.length === 0) {
      return res.status(401).json({ error: "Invalid user or password" });
    }
    const studentDb = resDb.rows[0];
    const dbPassword = studentDb.password;

    // compare password with database
    const isPasswordMatch = bcrypt.compareSync(password, dbPassword);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid user or password" });
    }

    const tokenData = {
      student_id: studentDb.student_id,
      username: studentDb.username,
      email: studentDb.email,
    };
    const configJWT = {
      expiresIn: "1h",
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, configJWT);

    const resData = {
      message: "Login successful",
      token: token,
    };

    return res.status(200).json(resData);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const authController = {
  registerUser,
  loginUser,
};

export default authController;
