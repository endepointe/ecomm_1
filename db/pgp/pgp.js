const initOptions = {
  connect(client, dc, useCount) {
    const cp = client.connectionParameters;
    console.log('Connected to db: ' + cp.database);
    console.log('CP: ' + cp);
  },
  disconnect(client, dc) {
    const cp = client.connectionParameters;
    console.log('Disconnecting from db: ' + cp.database);
  }
}

const pgp = require('pg-promise')(initOptions);

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'ec1',
  user: process.env.PSQLUSER,
  password: process.env.PSQLPASS,
  max: 2
};

const db = pgp(cn);

module.exports = db;