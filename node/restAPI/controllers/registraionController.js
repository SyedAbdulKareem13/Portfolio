const studentService = require("../services/registrationService");
const pool = require("../../databaseConfig");
const axios = require("axios");

class StudentController {
  async insertStudent(req, res) {
    try {
      const studentData = req.body;
      const result = await studentService.insertStudent(studentData);
      res.status(201).json({
        success: true,
        message: "Student data inserted successfully",
        data: result,
      });
    } catch (error) {
      console.error("Error inserting data:", error);
      res.status(500).json({ success: false, message: "Error inserting data" });
    }
  }

  async getStudentData(req, res) {
    try {
      const connection = await pool.promise().getConnection();
      const query =
        "SELECT * FROM student_info ORDER BY student_id DESC LIMIT 1";
      const [rows] = await connection.query(query);
      connection.release();

      return res.status(200).json(rows[0]);
    } catch (error) {
      console.error("Error retrieving student data:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStudentsData(req, res) {
    try {
      const page = req.query.page || 1; // Get the page number from the query parameter (default to 1)
      const pageSize = 5; // Number of rows per page

      const offset = (page - 1) * pageSize; // Calculate the offset based on the page number

      const connection = await pool.promise().getConnection();

      const query = `SELECT * FROM student_info LIMIT ? OFFSET ?`;
      const [results] = await connection.query(query, [pageSize, offset]);

      connection.release();

      const data = results.map((result) => ({
        student_id: result.student_id,
        first_name: result.first_name,
        last_name: result.last_name,
        email_id: result.email_id,
        birthdate: result.birthdate,
      }));

      res.json({ data });
    } catch (error) {
      console.error("Error retrieving data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getStudentsByPage(req, res) {
    try {
      const page = req.query.page || 1; // Get the page number from the query parameter (default to 1)
      const pageSize = 5; // Number of rows per page

      const offset = (page - 1) * pageSize; // Calculate the offset based on the page number

      const connection = await pool.promise().getConnection();

      const query = `SELECT * FROM student_info LIMIT ? OFFSET ?`;
      const [results] = await connection.query(query, [pageSize, offset]);

      connection.release();

      const data = results.map((result) => ({
        student_id: result.student_id,
        first_name: result.first_name,
        last_name: result.last_name,
        email_id: result.email_id,
        birthdate: result.birthdate,
      }));

      res.json({ data });
    } catch (error) {
      console.error("Error retrieving data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async editStudentDetail(req, res) {
    try {
      const updatedStudent = req.body;
      console.log("Received student_id:", updatedStudent.student_id); // Add this line for logging
      const connection = await pool.promise().getConnection();
      const query =
        "UPDATE student_info SET first_name = ?, last_name = ?, email_id = ?, birthdate = ? WHERE student_id = ?";
      const [result] = await connection.query(query, [
        updatedStudent.first_name,
        updatedStudent.last_name,
        updatedStudent.email_id,
        updatedStudent.birthdate,
        updatedStudent.student_id,
      ]);

      if (result.affectedRows === 1) {
        res
          .status(200)
          .json({ success: true, message: "Student updated successfully" });
      } else {
        res.status(404).json({ success: false, message: "Student not found" });
      }
    } catch (error) {
      console.error("Error updating student:", error);
      res
        .status(500)
        .json({ success: false, message: "Error updating student" });
    }
    console.log("Received request body:", req.body);
    console.log("SQL query:", query);
  }

  async loginEntry(req, res) {
    const { email_id, password_hash } = req.body;

    try {
      const connection = await pool.promise().getConnection();
      const query =
        "SELECT * FROM student_info WHERE email_id = ? AND password_hash = ?";
      const [results] = await connection.query(query, [
        email_id,
        password_hash,
      ]);
      connection.release();

      if (results.length === 1) {
        // Successful login
        const user = results[0];
        res.status(200).json({
          success: true,
          message: "Login successful",
          user: {
            student_id: user.student_id,
            first_name: user.first_name,
            last_name: user.last_name,
            email_id: user.email_id,
            birthdate: user.birthdate,
          },
        });
      } else {
        // Failed login
        res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }
}

class openApiTest {
  async fetchDataFromOpenApi(req, res) {
    try {
      const options = {
        method: "GET",
        url: "https://mashvisor-api.p.rapidapi.com/rental-rates",
        params: {
          state: "CA",
          source: "airbnb",
          city: "Los Angeles",
          zip_code: "90291",
        },
        headers: {
          "X-RapidAPI-Key":
            "a689b39dabmshe45642130a5746dp18aa35jsn057cdc3eb172",
          "X-RapidAPI-Host": "mashvisor-api.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      const responseData = response.data;

      // Process the responseData as needed

      res.status(200).json({
        success: true,
        message: "Data from Open API retrieved successfully",
        data: responseData,
      });
    } catch (error) {
      console.error("Error fetching data from Open API:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching data from Open API",
        error: error.message,
      });
    }
  }
}

module.exports = new StudentController();
module.exports = new openApiTest();
