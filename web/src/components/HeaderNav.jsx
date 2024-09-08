import { useNavigate } from "react-router-dom";

function HeaderNav() {
  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0.5rem",
    backgroundColor: "#333",
    color: "#fff",
  };

  const navigate = useNavigate();

  function handleNavigateToDashboard() {
    navigate("/");
  }

  function handleNavigateToDashboard() {
    navigate("/dashboard");
  }

  function handleNavigateToRegisterCourse() {
    navigate("/course");
  }

  function handleNavigateToCourseHome() {
    navigate("/home");
  }

  function handleNavigateToAddCourse() {
    navigate("/addcourse");
  }

  function handleNavigateToCsDashboard() {
    navigate("/csdashboard");
  }

  return (
    <header style={headerStyle}>
      <div>
        <button
          onClick={handleNavigateToCourseHome}
          className="primary"
          style={{ marginRight: "10px" }}
        >
          Home
        </button>
        <button
          onClick={handleNavigateToDashboard}
          className="primary"
          style={{ marginRight: "10px" }}
        >
          Student Dashboard
        </button>
        <button
          onClick={handleNavigateToRegisterCourse}
          className="primary"
          style={{ marginRight: "10px" }}
        >
          Register Course
        </button>
        <button
          onClick={handleNavigateToCsDashboard}
          className="primary"
          style={{ marginRight: "10px" }}
        >
          Course Dashboard
        </button>
      </div>
      <div>
        <button onClick={handleNavigateToAddCourse} className="primary">
          Add Course
        </button>
      </div>
    </header>
  );
}

export default HeaderNav;
