const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const password = process.env.PASSWORD;
const connectdb = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://herorp732:${password}@dhirajcluster.dg7ykbr.mongodb.net/My_contacts_backend?retryWrites=true&w=majority`
    );
    console.log("monodbconnected");
    console.log(connect.connection.host);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { connectdb };
