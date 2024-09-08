import { Router } from "express";
import healthController from "../controllers/health.js";
import authController from "../controllers/User/register.js";
import privacyController from "../controllers/privatepath.js";
import isAuth from "../middlewares/isAuth.js";
import courseController from "../controllers/Course/addcourse.js";
import stdAddCourse from "../controllers/Course/stdAddCourse.js";
import stdDeleteCourse from "../controllers/Course/stdDeleteCourse.js";
import stdListCourse from "../controllers/Course/stdListCourse.js";
import stdUpdateCourse from "../controllers/Course/stdUpdateCourse.js";
import stdViewCourse from "../controllers/Course/stdViewCourse.js";
import listCourse from "../controllers/Course/listCourse.js";

const router = Router();

router.get("/health", healthController.getHealth);
router.post("/health", healthController.postHealth);
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/private", isAuth, privacyController.privatePath);
router.post("/course", isAuth, courseController.addCourse);

// course routes
router.post("/stdCourse", isAuth, stdAddCourse);
router.delete("/stdCourse/:registration_id", isAuth, stdDeleteCourse);
router.get("/stdCourse", isAuth, stdListCourse);
router.put("/stdCourse", isAuth, stdUpdateCourse);
router.get("/stdCourse", isAuth, stdViewCourse);
router.get("/listCourse", isAuth, listCourse);

export default router;
