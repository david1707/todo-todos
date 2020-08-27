exports.getTodo = (req, res, next) => {
  //TODO Return Todo with ID :id
  // Get a Todo
  const id = req.params.id;

  res.json({ data: { id: id, name: `Todo list #${id}`, todos: [] } });
};

exports.postTodo = (req, res, next) => {
  // TODO Create a new Todo
  // Creates a new Todo

  res.json({ data: "New Todo created" });
};

exports.patchTodo = (req, res, next) => {
  // TODO Update :id Todo
  // Updates a Todo
  const id = req.params.id;

  res.json({ data: { id: id, name: `Todo list #${id}`, todos: [] } });
};
