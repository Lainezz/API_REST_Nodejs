const mongoose = require("mongoose");
const { Schema } = mongoose;
const { model } = mongoose;

const esquemaSessions = new Schema({
  email: {
    type: String,
    required: true,
  },
  sessionId: {
    type: String,
    required: true,
  },
});

module.exports = model("Session", esquemaSessions);
