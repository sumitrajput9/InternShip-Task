import express from "express";
import { deleteStudent, deleteTeacher, getSchoolData, saveSchoolData, saveStudentData, saveTeacherData, updateStudenttoSchool, updateTeachertoSchool } from "../Controller/schoolController.js";
import { authLogin } from "../Controller/authController.js";
const router = express.Router();
router.post("/saveSchool",saveSchoolData);
router.post("/login",authLogin)
router.post("/save/teachers",saveTeacherData);
router.post("/save/student",saveStudentData)
router.put("/update/school/student/:id/:obj",updateStudenttoSchool)
router.put("/update/school/teacher/:id/:obj",updateTeachertoSchool);
router.delete("/delete/student/:id/:obj",deleteStudent);
router.delete("/delete/teacher/:id/:obj",deleteTeacher);
router.get("/",getSchoolData);
export default router;