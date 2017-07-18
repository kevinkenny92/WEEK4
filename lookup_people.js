const pg = require("pg")
const settings = require("./settings")

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const famousperson = process.argv[2]

client.connect((err) => {
  if (err) {
    return console.error("Connection error" , err)
  }
  const query = `SELECT *
                FROM famous_people
                WHERE first_name = $1 OR last_name = $1;`
  client.query(query,[famousperson], (err, result) => {
    if (err) {
      return console.error("error running query", err)
    }
    console.log("Running Search ")
    const obj = result.rows[0]
    const bDate = result.rows[0].birthdate.toISOString().split("T")[0]
    console.log(`Found database match by name '${famousperson}': ${obj.id}:
                First Name :${obj.first_name}
                Last Name: ${obj.last_name},
                Born on: '${bDate}'`)  // give fname, lname and DOB
    client.end()
  })
})


