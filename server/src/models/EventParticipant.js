const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database.js');

const Event = sequelize.define('Event', {
    event_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    transport_mode: { type: DataTypes.STRING },
    event_date: { type: DataTypes.DATE },
    location: { type: DataTypes.STRING },
    accessibility_options: { type: DataTypes.STRING }
});

module.exports = Event;
