const { argv } = require("yargs");
const FilmModel = require("./filmModel");

//Adds a new movie using the Film schema.
exports.addFilm = async (newFilm) => {
  try {
    let film = new FilmModel(newFilm);
    await film.save();
    console.log("Movie created");
  } catch (error) {
    console.log(error);
  }
};

//Just lists all the entries - essentially find with no arguments.
exports.list = async () => {
  try {
    list = await FilmModel.find();
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};

//This takes the yargs object and turns it into an array of its' key value pairs, then selects the second pair inputted by the user (e.g. --title="Drive"), and turns that back into an object for the search query to fire. It's a little ugly, but it's also infinitely scalable.
exports.search = async (argv) => {
  try {
    searchCriteria = Object.entries(argv);
    searchValue = [];
    searchValue.push(searchCriteria[2]);
    searchObj = Object.fromEntries(searchValue);
    list = await FilmModel.find(searchObj);
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};

//Finds a film by its' title and then updates based on whichever "new" key value pair the user passed e.g. newtitle becomes title.
exports.update = async (argv) => {
  try {
    if (argv.newtitle) {
      await FilmModel.findOneAndUpdate(
        { title: argv.title },
        { title: argv.newtitle }
      );
    } else if (argv.newactor) {
      await FilmModel.findOneAndUpdate(
        { title: argv.title },
        { title: argv.newactor }
      );
    } else if (argv.newgenre) {
      await FilmModel.findOneAndUpdate(
        { title: argv.title },
        { genre: argv.newgenre }
      );
    } else if (argv.newrating) {
      await FilmModel.findOneAndUpdate(
        { title: argv.title },
        { rating: argv.newrating }
      );
    }
  } catch (error) {
    console.log(error);
  }
};

//Finds and deletes based on the title, since that's the only unique & required value. Probably worth including ID as an option here for very persnickety usage
exports.deleteOne = async () => {
  try {
    await FilmModel.findOneAndDelete({ title: argv.title });
  } catch (error) {
    console.log(error);
  }
};
