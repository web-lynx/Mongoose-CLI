const mongoose = require("mongoose");
const FilmModel = require("./filmModel");

exports.addFilm = async (newFilm) => {
  try {
    let film = new FilmModel(newFilm);
    await film.save();
    console.log("Movie created");
  } catch (error) {
    console.log(error);
  }
};
