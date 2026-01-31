const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"]
}));

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://admin:Eb3Y8dgfFRwwsThq@auth-cluster.aqlchno.mongodb.net/?appName=auth-cluster")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Import User model
const User = require("./User");

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Register route
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
    res.json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login success", user });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
