const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  todos: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("TodoList", todoListSchema);
