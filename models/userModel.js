const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      requred: [true, "Please add the user name"],
    },
    email: {
      type: String,
      requred: [true, "Please add the user email address"],
      unique: [true, "Email address already in use"],
    },
    password: {
      type: String,
      requred: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
