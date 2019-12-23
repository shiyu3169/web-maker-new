const mysql = require("mysql");
const config = require("config");
const setting = config.get("mysql");

const sql = mysql.createConnection(setting);

module.exports = sql;
