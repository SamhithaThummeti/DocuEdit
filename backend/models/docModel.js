const mongoose = require("mongoose");


mongoose.connect(
  "mongodb+srv://samhithathummeti_db_user:F6hok5NfPY7tOVBg@cluster0.fswkzh9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const docSchema = mongoose.Schema({
  title: String,
  content: {
    type: String,
    default: "",
  },
  uploadedBy: String,
  date: {
    type: Date,
    default: Date.now,
  },
  lastUpdate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Document", docSchema);
