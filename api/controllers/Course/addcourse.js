import pool from "../../database/connection.js";

const query = `
INSERT INTO courses (course_code, title, credit_hours, department, semester)
VALUES ($1, $2, $3, $4, $5)
RETURNING course_id, course_code, title, credit_hours, department, semester
`;

async function addCourse(req, res) {
  const course_code = req.body.course_code;
  const title = req.body.title;
  const credit_hours = req.body.credit_hours;
  const department = req.body.department;
  const semester = req.body.semester;

  if (!course_code || !title || !credit_hours || !department || !semester) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const resDb = await pool.query(query, [
      course_code,
      title,
      credit_hours,
      department,
      semester,
    ]);
    const courseDb = resDb.rows[0];
    const data = {
      message: "Course registered successfully",
      data: {
        course_code: courseDb.course_code,
        title: courseDb.title,
        credit_hours: courseDb.credit_hours,
        department: courseDb.department,
        semester: courseDb.semester,
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

const courseController = {
  addCourse,
};

export default courseController;
