const express = require("express");
const app = express();

const PORT = 5173;

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./db/core.sqlite3",
});

try {
	await sequelize.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

app.get("/api", (req, res) => {
	res.send("Running");
});

app.get("/api/data", (req, res) => {
	sequelize.res.send("data");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}/`);
});
