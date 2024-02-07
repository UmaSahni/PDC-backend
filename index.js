const express = require("express");
const colors = require("colors");
const { UserRouter } = require("./Routers/user.routes");
const { connection } = require("./db");
const { auth } = require("./Middleware/Auth.middleware");

const cors = require('cors');
const { detailRouter } = require("./Routers/detail.routes");
require("dotenv").config

const app = express();
const port = process.env.PORT ;

app.use(express.json()); 
app.use(cors())

app.use("/user", UserRouter);


app.get("/", async (req, res) => {
  try {
    res.status(200).json({ msg: "I am in home route" });
  } catch (error) {
    res.status(500).json({ msg: "Error in home route" });
  }
});


// Auth ----> Middleware
app.use(auth)

app.use("/details", detailRouter)


app.listen(port, async () => {
  try {
    await connection;
    console.log(colors.bgYellow(`connectd to mongo db`));
  } catch (error) {
    console.log(colors.bgRed("Error in connecting mongoDb"));
  }
  console.log(colors.rainbow(`Backend is running on port ${port}`));
});