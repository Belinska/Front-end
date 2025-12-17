require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./mongoDB");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    await connectDB();

    app.use("/api", routes);

    app.use(express.static(path.join(__dirname, "../frontend")));
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend/index.html"));
    });

    app.listen(3000, () => {
      console.log("API running on http://localhost:3000");
    });
  } catch (err) {
    console.error("Server start error:", err);
  }
}

startServer();
