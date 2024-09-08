import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Header() {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0.5rem",
    backgroundColor: "#333",
    color: "#fff",
  };

  const navigate = useNavigate();

  function handleNavigateToLogin() {
    navigate("/");
  }

  function handleNavigateToRegister() {
    navigate("/register");
  }

  function handleNavigateToHome() {
    navigate("/home");
  }

  function handleLogout() {
    Cookies.remove("authToken");
    navigate("/");
  }
  const token = Cookies.get("authToken");

  return (
    <header style={headerStyle}>
      <div>
        <h1 onClick={handleNavigateToHome} style={{ cursor: "pointer" }}>
          Collage N9
        </h1>
      </div>

      {token ? (
        <button onClick={handleLogout} className="outline">
          Logout
        </button>
      ) : (
        <div>
          <button
            onClick={handleNavigateToLogin}
            className="primary"
            style={{ marginRight: "10px" }}
          >
            Login
          </button>
          <button onClick={handleNavigateToRegister} className="outline">
            Register
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
