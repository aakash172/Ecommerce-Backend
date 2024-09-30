const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db.js");
const router = require("./routes/index.js");
const cookieParser = require("cookie-parser");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const port = 8080 || process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port, (err) => {
      if (err) {
        console.log("Error occurred while starting the server: " + err);
      } else {
        console.log("Successfully connected to DB");
        console.log("Server is running on port " + port);
      }
    });
  })
  .catch((err) => {
    console.log("Error occurred while connecting to the DB: " + err);
  });
