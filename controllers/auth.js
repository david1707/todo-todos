exports.login = (req, res, next) => {
  //TODO Lets the user login with email and password
  // Confirms user login and returns a JWT
  console.log(req.body)
  res.json({ data: "User logged in" });
};

exports.logout = (req, res, next) => {
  // TODO Logs out the current user
  // Logout user from the API, removing the JWT token
  res.json({ data: "User logout" });
};

exports.signIn = (req, res, next) => {
  //TODO Create new user
  // Creates a new User
  res.json({ data: "User created" });
};