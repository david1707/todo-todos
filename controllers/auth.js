const bcrypt = require("bcrypt");

const User = require("../models/user");

exports.login = (req, res, next) => {
  //TODO Lets the user login with email and password
  // Confirms user login and returns a JWT
  const { email, password } = req.body;

  res.json({ data: { email, password } });
};

exports.logout = (req, res, next) => {
  // TODO Logs out the current user
  // Logout user from the API, removing the JWT token
  res.json({ data: "User logout" });
};

exports.signIn = async (req, res, next) => {
  // Creates a new User

  // Checks if user already exists
  const { email, password } = req.body;
  const userExists = await User.findOne({ email: email });

  // If user already exists, exit
  if (userExists) {
    return res.json({ error: `The email '${email}' is already in use.` });
  }

  // Hash the password and then create an user

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = new User({
    email: email,
    password: hashedPassword,
  });

  await user.save();

  res.status(201).json({ message: `User created with email '${email}'` });
};
