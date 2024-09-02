const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database.js');

const User = sequelize.define('User', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    birth_date: { type: DataTypes.DATE },
    gender: { type: DataTypes.STRING },
    phone_number: { type: DataTypes.STRING },
    emergency_contact: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING }
});

module.exports = User;
