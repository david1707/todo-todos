const bcrypt = require("bcrypt");

const User = require("../models/user");

exports.login = async (req, res, next) => {
  // Confirms user login and returns a JWT

  // Checks if user with email exists
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ error: "Email not found." });
  }

  // Checks if password is correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (!passwordIsCorrect) {
    return res.status(401).json({ error: "Password does not match." });
  }
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
