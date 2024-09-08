import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import db from "./database/init.js";
import createCourseTable from "./models/course.js";
import createRegistrationTable from "./models/registration.js";
import createStudentTable from "./models/student.js";
import authController from "./controllers/User/register.js";

const app = express();

const PORT = 3000;

// Configure CORS to allow all origins
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
db().then(() => {
  createStudentTable();
  createCourseTable();
  createRegistrationTable();
});

// routes
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
