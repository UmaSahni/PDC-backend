const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    pass: { type: String, required: true },
    email: { type: String, required: true, unique: true, },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };