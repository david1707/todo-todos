exports.getProfile = (req, res, next) => {
  //TODO Just return the own user stored on req.user. No other users may be requested
  // Returns own User
  res.json({ data: "Current user data" });
};

exports.patchProfile = (req, res, next) => {
  //TODO Update Username, email and/or password and auto-update updatedAt
  // Updates User
  res.json({ data: "User updated" });
};

exports.delete = (req, res, next) => {
  //TODO Delete own user
  // Deletes a User
  res.json({ data: "User deleted" });
};

exports.getTodos = (req, res, next) => {
  //TODO Returns all the TODOS that the user can edit.
  // Get all Todos that the user can edit (own and with access)
  res.json({
    data: [
      { id: 1, name: "Todo list #1", todos: [] },
      { id: 3, name: "Todo list #3", todos: [] },
      { id: 7, name: "Todo list #7", todos: [] },
      { id: 12, name: "Todo list #12", todos: [] },
      { id: 19, name: "Todo list #19", todos: [] },
    ],
  });
};

exports.getOwnTodos = (req, res, next) => {
  //TODO Returns all the TODOS created by the user
  // Get all Todos the user created
  res.json({
    data: [
      { id: 1, name: "Todo list #1", todos: [] },
      { id: 3, name: "Todo list #3", todos: [] },
      { id: 7, name: "Todo list #7", todos: [] },
    ],
  });
};
