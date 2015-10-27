var passportConfig = require('./passport.config'),
  envVariables = {
    expressSessionKey: process.env.EXPRESS_SESSION_KEY,
    db: {
      name: process.env.DATABASE_NAME,
      dialect: process.env.DATABASE_DIALECT,
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD
    }
  };

module.exports = {
  development: envVariables,
  staging: envVariables,
  production: envVariables,
};
