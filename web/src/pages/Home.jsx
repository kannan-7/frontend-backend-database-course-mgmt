import Header from "../components/Header";
import { HomeContainer, HomeContainerTop } from "../sharedStyles/form";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleNavigateToDashboard() {
    navigate("/dashboard");
  }

  function handleNavigateToRegisterCourse() {
    navigate("/course");
  }

  function handleNavigateToCourseDashboard() {
    navigate("/home");
  }

  function handleNavigateToAddCourse() {
    navigate("/addcourse");
  }

  return (
    <div>
      <Header />
      <div style={HomeContainerTop}>
        <h1>I want to...</h1>
      </div>
      <section style={HomeContainer}>
        <div style={{ padding: "1rem" }}>
          <button onClick={handleNavigateToDashboard} className="primary-nav">
            Student Dashboard
          </button>
          <button
            onClick={handleNavigateToRegisterCourse}
            className="primary-nav"
          >
            Register Course
          </button>
          <button
            onClick={handleNavigateToCourseDashboard}
            className="primary-nav"
          >
            Course Dashboard
          </button>
          <button onClick={handleNavigateToAddCourse} className="primary-nav">
            Add Course
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
