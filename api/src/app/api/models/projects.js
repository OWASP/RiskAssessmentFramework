const mongoose = require("mongoose");
//Define a schema
const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  created_on: {
    type: Date,
    trim: true,
    required: true
  }
});
module.exports = mongoose.model("Project", ProjectSchema);
