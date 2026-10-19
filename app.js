const express = require("express");

function createApp() {
const app = express();
app.disable("x-powered-by");

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

return app;
}
if (require.main === module) {
  const server = createApp().listen(process.env.PORT || 3000, "0.0.0.0");
  process.on("SIGTERM", () => server.close());
  process.on("SIGINT", () => server.close());
}
module.exports = {createApp};
