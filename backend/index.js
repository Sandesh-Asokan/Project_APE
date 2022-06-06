const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/route");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.CONNECT_URL, () =>
  console.log("DB success bro!!")
);

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);

app.listen(4000, () => console.log("Success bro!"));
