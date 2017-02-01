const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const famousName = process.argv[2];


function putPerson (firstName, lastName, birthdate) {
  console.log("Searching ...");
  console.log("Found 1 person(s) by the name " + "'" + lastName + "'");
  console.log("- 1: " + firstName + " " + lastName + ", born " + "'" + birthdate.slice(0, 10) + "'");
};

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE last_name='" + famousName + "'", (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    const person = result.rows[0];

    putPerson(person.first_name, person.last_name, person.birthdate.toISOString());
    client.end();
  });
});