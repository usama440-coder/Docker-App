const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    country: {
        type: String,
        required: [true, 'Please provide country']
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);