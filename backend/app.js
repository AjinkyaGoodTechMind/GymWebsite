const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var logger = require("morgan");
var path = require("path");

cors = require("cors");
const corsOptions = {
  origin: true,
  credentials: true,
};
app.options("*", cors(corsOptions));

// Static Middleware
app.use(express.static(path.join(__dirname, "public")));

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// view engine setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}

const sessionRoutes = require("./routes/sessionRoutes");
app.use("/api/session", sessionRoutes);

app.get("/", function (req, res) {
  res.render("Demo");
});

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

module.exports = app;
