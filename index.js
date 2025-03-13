const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://adminUser:securePassword@10.0.1.26:27017/wizdemo";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Hello from Oracle Kubernetes!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

