const express = require("express");
const bodyParser = require("body-parser");

require('./database/database');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const authRoute = require("./routes/auth");
const todosRoute = require("./routes/todos");
const userRoute = require("./routes/user");

app.use("/auth", authRoute);
app.use("/todos", todosRoute);
app.use("/user", userRoute);

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todotodos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

