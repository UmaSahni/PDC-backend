const mongoose = require("mongoose");

const userDetails = mongoose.Schema(
  {
    name: { type: String, required: true },
    specialize: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const DetailsModel = mongoose.model("details", userDetails)

module.exports = {DetailsModel}
