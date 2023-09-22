const pool = require("../../databaseConfig");
// const bcrypt = require("bcrypt");

class StudentService {
  async insertStudent(studentData) {
    try {
      const connection = await pool.promise().getConnection();
      const query = "INSERT INTO student_info SET ?";
      const [result] = await connection.query(query, studentData);
      connection.release();

      if (result.affectedRows === 1) {
        return { success: true, message: "Student data inserted successfully" };
      } else {
        return { success: false, message: "Error inserting data" };
      }
    } catch (error) {
      console.error("Error inserting data:", error);
      throw error;
    }
  }
}

module.exports = new StudentService();
