import pool from "../../database/connection.js";

const query = `
SELECT registration_id, course_code, student_id, registration_date FROM registrations
WHERE student_id = $1;
`;

async function stdListCourse(req, res) {
  try {
    const studentId = req.user.student_id;
    const dbRes = await pool.query(query, [studentId]);
    const registrations = dbRes.rows;
    const data = {
      message: "User listed course successfully",
      data: registrations,
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default stdListCourse;
