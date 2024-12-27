// // server.js
import express from "express"; // Use import syntax for modules
import pool from "./db.js"; // Import the database connection from db.js

// const app = express();
// app.use(express.json()); // To parse incoming JSON data

// // Define the POST route for creating a new customer
// app.post("/customers", async (req, res) => {
//   const { name, email, password, age, fitness_level, goal, mobile, address } =
//     req.body;

//   if (
//     !name ||
//     !email ||
//     !password ||
//     !fitness_level ||
//     !goal ||
//     !age ||
//     !mobile ||
//     !address
//   ) {
//     return res.status(400).send("All fields are required");
//   }

//   try {
//     const [rows] = await pool.query(
//       "INSERT INTO customers (name, email, password, age, fitness_level, goal, mobile, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
//       [name, email, password, age, fitness_level, goal, mobile, address]
//     );
//     res.status(201).send(`Customer created with ID: ${rows.insertId}`);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server error");
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// // Adding a root route
// app.get("/", (req, res) => {
//   res.send("Welcome to the FatFitness API!");
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// // server.js

// // Import necessary modules
// const express = require("express");
// const pool = require("./db"); // Import the database connection (db.js)

// const app = express();
// app.use(express.json()); // Middleware to parse JSON bodies

// // POST route to create a new customer
// app.post("/customers", async (req, res) => {
//   console.log(req.body); // Log the request body (for debugging purposes)

//   // Destructure the request body to get customer details
//   const { name, email, password, age, fitness_level, goal, mobile, address } = req.body;

//   // Check if all fields are provided
//   if (!name || !email || !password || !fitness_level || !goal || !age || !mobile || !address) {
//     return res.status(400).send("All fields are required"); // Respond with an error if fields are missing
//   }

//   try {
//     // SQL query to insert a new customer into the database
//     const [rows] = await pool.query(
//       "INSERT INTO customers (name, email, password, age, fitness_level, goal, mobile, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
//       [name, email, password, age, fitness_level, goal, mobile, address]
//     );
//     // Respond with success and return the ID of the new customer
//     res.status(201).send(`Customer created with ID: ${rows.insertId}`);
//   } catch (err) {
//     console.error("Error occurred:", err); // Log any errors
//     res.status(500).send("Server error"); // Respond with a server error if something goes wrong
//   }
// });

// // Optional: Root route to check if the server is running
// app.get("/", (req, res) => {
//   res.send("Welcome to the FatFitness API!");
// });

// // Define the port and start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
///////////////////////////////////////////////////////////////////////////////////////

// const express = require("express");
// const pool = require("./db"); // Import the database connection
const app = express();

app.use(express.json()); // For parsing application/json

// Step 2: Get customer by ID (Read)
app.get("/customers/:id", async (req, res) => {
  const { id } = req.params; // Get customer ID from the URL parameter

  try {
    const [rows] = await pool.query("SELECT * FROM customers WHERE id = ?", [
      id,
    ]);

    if (rows.length > 0) {
      res.status(200).json(rows[0]); // Send customer details if found
    } else {
      res.status(404).send("Customer not found"); // Send 404 if customer is not found
    }
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Server error"); // Send 500 for server issues
  }
});

// Step 3: Update customer details (Update)
app.put("/customers/:id", async (req, res) => {
  const { id } = req.params; // Get the customer ID from the URL
  const { name, email, password, age, fitness_level, goal, mobile, address } =
    req.body;

  if (
    !name ||
    !email ||
    !password ||
    !fitness_level ||
    !goal ||
    !age ||
    !mobile ||
    !address
  ) {
    return res.status(400).send("All fields are required"); // Validation for missing fields
  }

  try {
    const [result] = await pool.query(
      "UPDATE customers SET name = ?, email = ?, password = ?, age = ?, fitness_level = ?, goal = ?, mobile = ?, address = ? WHERE id = ?",
      [name, email, password, age, fitness_level, goal, mobile, address, id]
    );

    if (result.affectedRows > 0) {
      res.status(200).send(`Customer with ID ${id} updated successfully`); // Send success if update successful
    } else {
      res.status(404).send("Customer not found"); // Send 404 if customer is not found
    }
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Server error"); // Send 500 if there's a server error
  }
});

// Step 4: Delete customer by ID (Delete)
app.delete("/customers/:id", async (req, res) => {
  const { id } = req.params; // Get the customer ID from the URL

  try {
    const [result] = await pool.query("DELETE FROM customers WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows > 0) {
      res.status(200).send(`Customer with ID ${id} deleted successfully`); // Send success if deletion is successful
    } else {
      res.status(404).send("Customer not found"); // Send 404 if no customer is found with the given ID
    }
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Server error"); // Send 500 if there's a server error
  }
});

// Existing POST route for creating customers
app.post("/customers", async (req, res) => {
  const { name, email, password, age, fitness_level, goal, mobile, address } =
    req.body;

  if (
    !name ||
    !email ||
    !password ||
    !fitness_level ||
    !goal ||
    !age ||
    !mobile ||
    !address
  ) {
    return res.status(400).send("All fields are required"); // Validation for missing fields
  }

  try {
    const [rows] = await pool.query(
      "INSERT INTO customers (name, email, password, age, fitness_level, goal, mobile, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [name, email, password, age, fitness_level, goal, mobile, address]
    );
    res.status(201).send(`Customer created with ID: ${rows.insertId}`); // Send success with created ID
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Server error"); // Send 500 for server issues
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

////////// Adding Workout Plan Post ///////////
app.post("/workout_plans", async (req, res) => {
  const { name, description, fitness_level, goal, duration, exercises } =
    req.body;

  // Validate inputs
  if (!name || !fitness_level || !goal || !exercises) {
    return res.status(400).send("All fields are required");
  }

  try {
    // Insert query to add data to workout_plans table
    const [rows] = await pool.query(
      "INSERT INTO workout_plans (name, description, fitness_level, goal, duration, exercises) VALUES (?, ?, ?, ?, ?, ?)",
      [name, description, fitness_level, goal, duration, exercises]
    );
    res.status(201).send(`Workout plan created with ID: ${rows.insertId}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

/////////// Getting a Workout Plan /////////////
app.get("/workout_plans", async (req, res) => {
  try {
    // Query to fetch all workout plans from the database
    const [rows] = await pool.query("SELECT * FROM workout_plans");
    res.status(200).json(rows); // Send the result as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

/////////// Reading a Single Workout Plan /////////////
app.get("/workout_plans/:id", async (req, res) => {
  const { id } = req.params; // Extract ID from the URL parameters

  try {
    const [rows] = await pool.query(
      "SELECT * FROM workout_plans WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).send("Workout plan not found");
    }

    res.status(200).json(rows[0]); // Send the requested workout plan as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
///////////// Update an existing workout plan /////////////
app.put("/workout_plans/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, fitness_level, goal, duration, exercises } =
    req.body;

  try {
    const [result] = await pool.query(
      "UPDATE workout_plans SET name = ?, description = ?, fitness_level = ?, goal = ?, duration = ?, exercises = ? WHERE id = ?",
      [name, description, fitness_level, goal, duration, exercises, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).send("Workout plan not found");
    }

    res.status(200).send(`Workout plan with ID: ${id} updated`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
//////////  Delete a Workout plan from database /////////
app.delete("/workout_plans/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query(
      "DELETE FROM workout_plans WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).send("Workout plan not found");
    }

    res.status(200).send(`Workout plan with ID: ${id} deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
//////////
