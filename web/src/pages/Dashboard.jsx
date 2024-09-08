import { useEffect, useState } from "react";
import { deleteApiWithToken, getApiWithToken } from "../utils/api";
import Cookies from "js-cookie";
import Header from "../components/Header";
import HeaderNav from "../components/HeaderNav";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [stdCourses, setStdCourses] = useState([]);

  async function fetchStdCourses() {
    try {
      setIsLoading(true);
      const token = Cookies.get("authToken");
      const serverRes = await getApiWithToken(
        "http://localhost:3000/stdCourse",
        token
      );
      if (!serverRes.ok) {
        alert("You are not authorized to view this page");
      }
      const data = await serverRes.json();
      setStdCourses(data.data);
      console.log(data);
    } catch (error) {
      console.error("Error at fetchStdCourse");
      alert("You are not authorized to view this page");
      window.location.href = "/Login";
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCourse(registration_id) {
    try {
      const token = Cookies.get("authToken");
      const serverRes = await deleteApiWithToken(
        `http://localhost:3000/stdCourse/${registration_id}`,
        token
      );
      if (!serverRes.ok) {
        alert("You are not authorized to delete this page");
      }
      alert("Course deleted successfully");
      fetchStdCourses();
    } catch (error) {
      console.error(error);
      alert("Error deleting course");
    }
  }

  useEffect(function () {
    fetchStdCourses();
  }, []);
  return (
    <div>
      <Header />
      <HeaderNav />
      <div style={{ padding: "2rem" }}>
        <h1>Student Dashboard</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Student ID</th>
                <th>Register At</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {stdCourses.map(function (stdCourse) {
                return (
                  <tr key={stdCourse.registration_id}>
                    <td>{stdCourse.course_code}</td>
                    <td>{stdCourse.student_id}</td>
                    <td>{stdCourse.registration_date}</td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        className="primary-delete"
                        onClick={() => deleteCourse(stdCourse.registration_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
