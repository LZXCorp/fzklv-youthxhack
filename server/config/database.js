const { Sequelize } = require('sequelize');
const path = require('path');

// SQLite DB Instance
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "../db/core.sqlite3"),
});

module.exports = sequelize;
