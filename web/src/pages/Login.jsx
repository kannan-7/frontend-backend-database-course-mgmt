import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {
  formContainer,
  inputContainer,
  sectionBorder,
  sectionContainer,
} from "../sharedStyles/form";
import { useForm } from "react-hook-form";
import { postApi } from "../utils/api";
import Cookies from "js-cookie";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  async function loginApi(data) {
    try {
      const res = await postApi("http://localhost:3000/login", data);
      if (!res.ok) {
        const serverError = await res.json();
        const error = serverError.error;
        alert(error);
        throw new Error(error);
      }
      const resData = await res.json();
      const token = resData.token;
      console.log(token);
      alert("User loged in successfully");
      navigate("/home");

      Cookies.set("authToken", token);

      reset();
    } catch (error) {
      console.error("Error at register Api!");
    }
  }
  function onSubmit(data) {
    loginApi(data);
  }
  return (
    <div>
      <Header />
      <div style={sectionContainer}>
        <section style={sectionBorder}>
          <h1 style={{ marginBottom: "1rem" }}>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} style={formContainer}>
            <div style={inputContainer}>
              <label htmlFor="username">User name</label>
              <input {...register("username")} type="username" id="username" />
            </div>
            <div style={inputContainer}>
              <label htmlFor="password">Password</label>
              <input {...register("password")} type="password" id="Password" />
            </div>
            <button className="primary-black" type="submit">
              Login
            </button>
            <span>
              {" "}
              or{" "}
              <Link to="/register" className="primary-black">
                Register
              </Link>
            </span>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;
