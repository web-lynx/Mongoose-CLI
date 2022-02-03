const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  actors: [
    {
      type: String,
      default: "Unknown",
    },
  ],
});

const FilmModel = mongoose.model("Movies", filmSchema);
module.exports = FilmModel;
