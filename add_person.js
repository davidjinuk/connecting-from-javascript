var knex = require('knex')({
  client: 'pg',
  searchPath: 'knex,public',
  connection: {
    host : 'ec2-54-227-237-223.compute-1.amazonaws.com',
    user : 'lopqritiyidvgo',
    password : '777a726d6ad057d6ead3b0c27513ae44d30d33606d4c1b3102da376d179b8f0a',
    database : 'd3usia2m1v11nh',
    port: 5432,
    ssl: true
  }
});

let find = process.argv;
let firstName = find[2];
let lastName = find[3];
let date = find[4];

knex("famous_people")
  .then(function () {
    return knex("famous_people").insert(
      {first_name: firstName, last_name: lastName, birthdate: date}
    );
  })

knex.select().table("famous_people").then(function(result) {
  console.log(result);
});