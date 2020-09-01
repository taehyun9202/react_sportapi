const mongoose = require("mongoose");

const SportSchema = new mongoose.Schema({
});

module.exports = mongoose.model("Sport", SportSchema);