import pool from "../database/connection.js";

const query = `
CREATE TABLE IF NOT EXISTS registrations (
registration_id SERIAL PRIMARY KEY,
student_id INTEGER REFERENCES students(student_id),
course_code VARCHAR(20) REFERENCES courses(course_code),
registration_date DATE NOT NULL DEFAULT CURRENT_DATE
);
`;

async function createRegistrationTable() {
  try {
    await pool.query(query);
    console.log("Registration table created successfully");
  } catch (error) {
    console.log(error);
    console.log("Fail to create registration table");
  }
}

export default createRegistrationTable;
