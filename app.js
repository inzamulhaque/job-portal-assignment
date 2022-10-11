const express = require("express");
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());

// import routes
const userRoute = require("./routes/user.route");
const jobRoute = require("./routes/job.route");

// routes
app.use("/user", userRoute);
app.use("/jobs", jobRoute);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
