const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

// Define routes
app.use("/api/user", require("./routes/user"));
app.use("/api/website", require("./routes/website"));
app.use("/api/page", require("./routes/page"));
// app.use("/api/widget", require("./routes/widget"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
