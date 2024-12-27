// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",       // Database host (use your server's address if not local)
//   user: "root",            // MySQL user (usually root on local machines)
//   password: "Sumit@2715", // Your MySQL password
//   database: "gym_database",  // The database you created earlier
// });

// // Export the pool to use in other files
// module.exports = pool.promise();
// db.js
/////////////////////////////////////////////////////////////////
import mysql from "mysql2";

// Create a pool of database connections
const pool = mysql.createPool({
  host: "localhost",       // Database host
  user: "root",            // MySQL user (usually root)
  password: "Sumit@2715", // MySQL password
  database: "gym_database",  // The name of your database
});

// Export the pool object as a promise for async operations
export default pool.promise();

