const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/papertrader';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE trades(id SERIAL PRIMARY KEY, symbol VARCHAR(40) not null, side BOOLEAN, quantity BIGINT, price NUMERIC)');
query.on('end', () => { client.end(); });