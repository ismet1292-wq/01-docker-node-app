const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my DevOps Portfolio App!",
    status: "Running",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "Healthy"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
