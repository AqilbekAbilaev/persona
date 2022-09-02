require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require('cors');
const connectionDB = require("./config/connectionDB");
const cors_set = require("./middleware/cors");
const PORT = 3500;
connectionDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use(cors());

app.use(cors_set);

app.use("/", require("./routes/route"));
app.use("/collections", require("./routes/collection"));

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log("Server running " + PORT);
  });
  console.log("Connected to Database");
});
