const express = require("express");
const session = require('express-session');

require('dotenv').config({ path: '.env.development' });

const morgan = require("morgan");

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

const sequelize = require("../config/database.js");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const swaggerUi = require('swagger-ui-express');

const app = express();

// Middleware
app.use(morgan("dev")); // Logs HTTP requests
app.use(express.json()); // Parses JSON request bodies

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Set true if using HTTPS
}));

// Swagger
const swaggerDocs = require('./swagger.js');
app.use('/api/docs', (req, res) => {
    res.redirect('/api/v1/docs');
});
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Default API Route
app.get("/api", (req, res) => {
	res.json({ message: "Hello World!" });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

// Sync SQLite database
sequelize
	.sync({ force: false })
	.then(() => console.log("SQLite Database synced"))
	.catch((err) => console.error("Database sync error:", err));

module.exports = app;
