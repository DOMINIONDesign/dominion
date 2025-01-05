const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./routes/userRouter");
const port = process.env.PORT || 8080;
// Middleware
app.use(cors());
app.use(express.json()); // Add this to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Add this to parse URL-encoded bodies
app.use((req, res, next) => {
  if (req.hostname.startsWith("www.")) {
    const newHost = req.hostname.replace("www.", "");
    res.redirect(301, `${req.protocol}://${newHost}${req.originalUrl}`);
  } else {
    next();
  }
});
// Serve static files from the React app (built)
// Fix: Don't include index.html in static path
app.use(express.static(path.join(__dirname, "../build")));

// // API routes
app.use("/user", userRouter);

// Catch-all route for all other requests (SPA support)
app.get("*", (req, res) => {
  // Fix: Correct path to index.html
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
