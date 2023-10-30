const config = require('config');
const mysql = require("mysql2");

const dbConfig = config.get('database');

const pool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;

// const config = require("config");
// const mysql = require("mysql2");
// const mongoose = require("mongoose");

// // Get the database configuration 
// const dbConfig = config.get("./config/default.json");

// // MySQL Connection
// const mysqlPool = mysql.createPool({
//   host: dbConfig.mysql.host,
//   user: dbConfig.mysql.user,
//   password: dbConfig.mysql.password,
//   database: dbConfig.mysql.database,
//   port: 3306,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// // MongoDB Connection
// mongoose.connect(
//   `mongodb://${dbConfig.mongodb.host}:${dbConfig.mongodb.port}/${dbConfig.mongodb.database}`,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// const mysqlConnection = mysqlPool.promise(); 
// const mongoConnection = mongoose.connection;

// module.exports = { mysqlConnection, mongoConnection };
