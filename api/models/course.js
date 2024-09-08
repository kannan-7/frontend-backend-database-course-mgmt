import pool from "../database/connection.js";

const query = `
CREATE TABLE IF NOT EXISTS courses (
course_id SERIAL PRIMARY KEY,
course_code VARCHAR(20) NOT NULL UNIQUE,
title VARCHAR(100) NOT NULL,
credit_hours INTEGER NOT NULL,
department VARCHAR(50) NOT NULL,
semester VARCHAR(20) NOT NULL
);
`;

async function createCourseTable() {
  try {
    await pool.query(query);
    console.log("Course table created successfully");
  } catch (error) {
    console.log(error);
    console.log("Fail to create course table");
  }
}

export default createCourseTable;
