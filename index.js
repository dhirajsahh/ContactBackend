const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const port = process.env.PORT;
const app = express();
app.use(express.json());
const mainRouter = require("./Routes/index");
const { connectdb } = require("./config/connectMongo");
app.use("/api", mainRouter);
connectdb();

app.listen(5000, () => {
  console.log("app is running in port ", port);
});
