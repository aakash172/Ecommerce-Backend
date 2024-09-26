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
    app.listen(port, () => {
      console.log("connecting to DB");
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log("Error Ocurred" + err);
  });
