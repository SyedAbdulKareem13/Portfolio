const express = require("express");
const router = express.Router();
const studentController = require("../controllers/registraionController");
const passport = require("passport");

router.post(
  "/api/insertStudent",
  passport.authenticate("jwt"),
  studentController.insertStudent
);

router.get(
  "/api/getStudentData",
  passport.authenticate("jwt"),
  studentController.getStudentData
);

router.get(
  "/api/getAllStudents",
  passport.authenticate("jwt"),
  studentController.getAllStudentsData
);

router.get(
  "/api/getAllStudentsData",
  passport.authenticate("jwt"),
  studentController.getStudentsByPage
);

router.post(
  "/api/editStudentDetail",
  passport.authenticate("jwt"),
  studentController.editStudentDetail
);

router.post(
  "/api/loginEntry",
  passport.authenticate("jwt"),
  studentController.loginEntry
);

router.get(
  "/api/fetchDataFromOpenApi",
  passport.authenticate("jwt"),
  studentController.fetchDataFromOpenApi
);

module.exports = router;
