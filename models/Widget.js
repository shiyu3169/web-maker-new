const mongoose = require("mongoose");

const WidgetSchema = mongoose.Schema({
  pageId: { type: mongoose.Schema.Types.ObjectId, ref: "Page" },
  widgetType: {
    type: String,
    enum: ["HEADING", "IMAGE", "YOUTUBE"],
    required: true
  },
  name: { type: String },
  text: { type: String },
  url: { type: String },
  width: { type: String },
  size: { type: String }
});

module.exports = mongoose.model("Widget", WidgetSchema);
