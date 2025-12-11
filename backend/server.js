const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI || "mongodb://root:example@mongo:27017/mydb?authSource=admin";
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/posts", postRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.log(err));