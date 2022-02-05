require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { addFilm, list, search, update } = require("./film/filmMethods");
const argv = yargs(hideBin(process.argv)).argv;

let helpText = `Interacts with an example MongoDB films database, using command-line arguments. Commands include:
                --info (You are here)
                --addfilm with arguments --title=""(mandatory) --actor="" --genre="" --synopsis="" --rating=""
                --list
                --search with query e.g. --title=""
                --update with query (title only) and new item to update e.g. --newtitle="", --newactor="" etc
                --delete with query (title only)`;

const app = async () => {
  if (argv.addfilm) {
    await addFilm({
      title: argv.title,
      actor: argv.actor,
      genre: argv.genre,
      synopsis: argv.synopsis,
      rating: argv.rating,
    });
  } else if (argv.list) {
    await list();
  } else if (argv.search) {
    await search(argv);
  } else if (argv.update) {
    await update(argv);
  } else if (argv.delete) {
    //Delete goes here
  } else if (argv.info) {
    console.log(helpText);
  } else {
    console.log("Sorry, incorrect command.");
  }
  mongoose.connection.close();
  console.log("Connection closed.");
};

app();
