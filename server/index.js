const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "praveen5765",
  database: "empsdb",
});

// Register API
app.post('/register', (req, res) => {
  const { email, username, password } = req.body;

  con.query("INSERT INTO users (email, username, password) VALUES(?, ?, ?)", [email, username, password], (err, result) => {
    if (err) {
      res.status(500).json({ message: "Error inserting user" });
    } else {
      res.status(200).json({ message: "Account created successfully" });
    }
  });
});

// Login API
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  con.query(sql, [username, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error during login" });
    }
    if (result.length > 0) {
      // Send a structured JSON response
      return res.status(200).json({ message: "login success" });
    } else {
      return res.status(400).json({ message: "No record found" });
    }
  });
});

// Run the server
app.listen(3001, () => {
  console.log("Backend server running on port 3001");
});
