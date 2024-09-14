const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db.js");
const router = require("./routes/index.js");

const app = express();
app.use(cors());
app.use(express.json());
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
    console.log("this" + err);
  });
