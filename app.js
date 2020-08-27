const express = require("express");

const app = express();

// Routes
const authRoute = require("./routes/auth");
const todosRoute = require("./routes/todos");
const userRoute = require("./routes/user");

app.use('/auth', authRoute)
app.use("/todos", todosRoute);
app.use("/user", userRoute);

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
