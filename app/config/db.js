const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Uriel123#",
    database: "porto"
});

db.getConnection(() => {
    console.log("Connection to the database server succesful")
});

module.exports = db;
