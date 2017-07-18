const settings = require("./settings"); //settings.json
const knex = require('knex')({
  client: 'pg',
  connection: {
    user      : settings.user,
    password  : settings.password,
    database  : settings.database,
    host      : settings.host,

  }
});

console.log("Connected ");

let input = process.argv.slice(2);
const first_name: input[0],             //Input first name
const last_name: input[1],              //input las nname
const DOB: input[2]             // INPUT DOB

};


knex("famous_people"). returning('*')
.insert({
  first_name : First,
  last_name : last,
  birthdate : DOB
}).asCallback(function(err, rows) {

  if(err) {
    console.log("Unable to add to database");
    return;
  }
  console.log(rows);
})

knex.destroy();