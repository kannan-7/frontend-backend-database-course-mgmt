import pool from "../../database/connection.js";

const query = `
SELECT course_id, course_code, title, credit_hours, department, semester FROM courses
WHERE course_id = $1;
`;

async function listCourse(req, res) {
  try {
    const courseId = req.courses.course_Id;
    const dbRes = await pool.query(query, [courseId]);
    const courses = dbRes.rows;
    const data = {
      message: "Course listed course successfully",
      data: courses,
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default listCourse;
