require("dotenv").config();
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT || 5432;

module.exports = {
  development: {
    username: dbUsername,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    port: dbPort,
    dialect: "postgres",
  },
  test: {
    username: dbUsername,
    password: dbPassword,
    database: "chat_app_test",
    host: dbHost,
    port: dbPort,
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    username: dbUsername,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    port: dbPort,
    dialect: "postgres",
  },
};