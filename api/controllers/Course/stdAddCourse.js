import pool from "../../database/connection.js";

const query = `
INSERT INTO registrations(course_code, student_id)
VALUES ($1, $2)
RETURNING registration_id, student_id, course_code, registration_date
`;

async function stdAddCourse(req, res) {
  try {
    const course_code = req.body.course_code;
    if (!course_code) {
      return res.status(400).json({ error: "Course_code required" });
    }

    const studentId = req.user.student_id;
    const values = [course_code, studentId];

    const dbRes = await pool.query(query, values);
    const registration = dbRes.rows[0];
    const data = {
      message: "User created course successfully",
      data: registration,
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default stdAddCourse;
