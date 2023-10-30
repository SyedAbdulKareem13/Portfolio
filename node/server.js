const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const mysql = require("mysql2");

app.use(
  cors({
    origin: ["http://localhost:4200"],
  })
);
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "abcd1234",
  database: "student",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10, // Adjust as needed
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
    connection.release(); // Release the connection

    // Start the server after the database connection is established
    app.listen(port, () => {
      console.log(`Your server is running on http://localhost:${port}`);
    });
  }
});

app.use(bodyParser.json());

app.post("/api/getStudentData", async (req, res) => {
  try {
    const studentData = req.body; // Assuming the frontend sends JSON data

    // Insert student data into the database
    const connection = await pool.getConnection();
    const query = "INSERT INTO student_indo SET ?";
    const [result] = await connection.query(query, studentData);

    connection.release();

    if (result.affectedRows === 1) {
      res.status(201).json({ success: true, message: "Student data inserted successfully" });
    } else {
      res.status(500).json({ success: false, message: "Error inserting data" });
    }
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ success: false, message: 'Error inserting data' });
  }
});

app.get("/api/fieldData", (req, res) => {
  res.json(fieldData);
});

// const fieldData = [
//   {
//     id: 1,
//     fieldName: "First Name",
//     fieldDescription: "Enter the user's first name.",
//   },
//   {
//     id: 2,
//     fieldName: "Last Name",
//     fieldDescription: "Enter the user's last name.",
//   },
//   {
//     id: 3,
//     fieldName: "Email Address",
//     fieldDescription:
//       "Enter the user's email address.Upload the user's profile picture.Upload the user's profile picture.Upload the user's profile picture.",
//   },
//   {
//     id: 4,
//     fieldName: "Phone Number",
//     fieldDescription: "Enter the user's phone number.",
//   },
//   {
//     id: 5,
//     fieldName: "Date of Birth",
//     fieldDescription: "Enter the user's date of birth.",
//   },
//   {
//     id: 6,
//     fieldName: "Address",
//     fieldDescription: "Enter the user's home address.",
//   },
//   {
//     id: 7,
//     fieldName: "Gender",
//     fieldDescription: "Select the user's gender.",
//   },
//   {
//     id: 8,
//     fieldName: "Profile Picture",
//     fieldDescription: "Upload the user's profile picture.",
//   },
//   {
//     id: 9,
//     fieldName: "Occupation",
//     fieldDescription: "Enter the user's occupation.",
//   },
//   {
//     id: 10,
//     fieldName: "Education",
//     fieldDescription: "Enter the user's education details.",
//   },
//   {
//     id: 11,
//     fieldName: "Interests",
//     fieldDescription: "List the user's interests and hobbies.",
//   },
//   {
//     id: 12,
//     fieldName: "Favorite Books",
//     fieldDescription: "Share the user's favorite books.",
//   },
//   {
//     id: 13,
//     fieldName: "Social Media Links",
//     fieldDescription: "Provide links to the user's social media profiles.",
//   },
//   {
//     id: 14,
//     fieldName: "Emergency Contact",
//     fieldDescription: "Enter the user's emergency contact information.",
//   },
//   {
//     id: 15,
//     fieldName: "Medical History",
//     fieldDescription: "Share the user's medical history.",
//   },
//   {
//     id: 16,
//     fieldName: "Privacy Settings",
//     fieldDescription: "Customize the user's privacy preferences.",
//   },
// ];

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = process.env.PORT || 3000;
// const bodyParser = require("body-parser");
// const studentRoutes = require("../../FrontEnd-Practice/node/restAPI/routes/registrationRoutes");
// const passport = require("passport");
// const config = require("config");

// const connectToDatabase = require("./user");

// require("./passportConfig")(passport);
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(cors());
// app.use(bodyParser.json());

// app.use("/", studentRoutes);

// const sslEnabled = config.get("ssl");
// const mongoConnStr = config.get("mongo_conn_str");

// console.log(`SSL Enabled: ${sslEnabled}`);
// console.log(`MongoDB Connection String: ${mongoConnStr}`);

// // Connect to the MongoDB database
// connectToDatabase()
//   .then(() => {
//     const sslEnabled = config.get("ssl");
//     const mongoConnStr = config.get("mongo_conn_str");

//     console.log(`SSL Enabled: ${sslEnabled}`);
//     console.log(`MongoDB Connection String: ${mongoConnStr}`);

//     app.listen(port, () => {
//       console.log(`Your server is running on http://localhost:${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// app.listen(port, () => {
//   console.log(`Your server is running on http://localhost:${port}`);
// });
