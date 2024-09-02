const app = require('./src/app');
const dotenv = require('dotenv');
dotenv.config(); // Load .env.development

const PORT = process.env.PORT || 5173;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}/`);
});
