const express = require("express");
const cors = require("cors");
const app = express();
const { run } = require("./config/db");
const port = process.env.PORT || 4000;
require("dotenv").config();
const userRouter = require('./routes/userRoutes')

// middlewair

app.use(cors());
app.use(express.json());
run();





app.use('/api' , userRouter )










app.get("/", (req, res) => {
  res.send({
    status: true,
  });
});
app.listen(port, () => {
  console.log("SERVER IS RUNNING ON", port);
});
