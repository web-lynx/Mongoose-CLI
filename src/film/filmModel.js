const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  actor: { type: String, default: "Not Specified" },
  genre: { type: String, default: "Not specified" },
  synopsis: { type: String, default: "Not Specified" },
  rating: {
    type: Number,
    default: 0,
  },
});

const FilmModel = mongoose.model("Films", filmSchema);
module.exports = FilmModel;
