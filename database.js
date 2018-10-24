const pg = require('pg-promise')();
const db_user = process.env.DB_USER
const dbConfig = `postgres://${db_user}@localhost:5432/dgdg`;
const db = pg(dbConfig);

module.exports = db;