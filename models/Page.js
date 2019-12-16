const mongoose = require("mongoose");

const PageSchema = mongoose.Schema({
  websiteId: { type: mongoose.Schema.Types.ObjectId, ref: "Website" },
  name: { type: String, required: true },
  title: { type: String }
});

module.exports = mongoose.model("Page", PageSchema);
