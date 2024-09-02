const swaggerJsDoc = require("swagger-jsdoc");

require('dotenv').config({ path: '.env.development' });

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0",
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}/api`,
            },
        ]
    },
    apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
