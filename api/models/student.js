import pool from "../database/connection.js";

const query = `
CREATE TABLE IF NOT EXISTS students (
student_id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
registration_date DATE NOT NULL DEFAULT CURRENT_DATE
);
`;

async function createStudentTable() {
  try {
    await pool.query(query);
    console.log("Student table created successfully");
  } catch (error) {
    console.log(error);
    console.log("Fail to create student table");
  }
}

export default createStudentTable;
