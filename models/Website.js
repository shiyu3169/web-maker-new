const mongoose = require("mongoose");

const WebsiteSchema = mongoose.Schema({
  developerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  description: { type: String }
});

module.exports = mongoose.model("Website", WebsiteSchema);
