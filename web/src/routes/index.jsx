import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import RegisterCourse from "../pages/RegisterCourse";
import AddCourse from "../pages/AddCourse";
import CsDashboard from "../pages/CsDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course" element={<RegisterCourse />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/csdashboard" element={<CsDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
