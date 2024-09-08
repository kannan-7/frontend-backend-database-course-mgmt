import pool from "../../database/connection.js";

const query = `
DELETE FROM registrations WHERE registration_id = $1 AND student_id = $2;
`;

async function stdDeleteCourse(req, res) {
  try {
    const registrationId = req.params.registration_id;
    const studentId = req.user.student_id;
    const dbRes = await pool.query(query, [registrationId, studentId]);
    if (dbRes.rowCount === 0) {
      return res.status(404).json({ error: "Course code not found" });
    }

    const data = {
      message: `User deleted course ID ${registrationId} successfully`,
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default stdDeleteCourse;
