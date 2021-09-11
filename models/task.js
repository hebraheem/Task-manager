const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field can not be empty"],
    trim: true,
    maxLength: [50, "Name can not be more than 50 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: { type: Date, default: Date.now },
  createdAt: {
    timestamps: true,
    type: Date,
  },
});

module.exports = model("tasks", taskSchema);
