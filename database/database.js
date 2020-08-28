const mongoose = require("mongoose");

const server = "localhost:27017";
const database = "todotodos";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Database connected successfully"))
      .catch((err) => console.error("Database connection error"));
  }
}

module.exports = new Database();
