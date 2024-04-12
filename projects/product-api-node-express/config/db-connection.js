var dbProperties = require("./db-properties.js");

var mysql = require("mysql2");

module.exports = {
    getConnection: ()=> {
        return mysql.createConnection({
            host: dbProperties.host,
            user: dbProperties.user,
            password: dbProperties.password,
            database: dbProperties.name
        });
    }
}   

