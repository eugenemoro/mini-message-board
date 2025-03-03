#! /usr/bin/env node

const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  author VARCHAR ( 255 ),
  added TIMESTAMP
);

INSERT INTO messages (text, author, added) 
VALUES
  ('Hi there!', 'Amando', '2025-03-03 15:00:00'),
  ('Hello World!', 'Charles', '2025-01-01 00:00:00');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_PATH}/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
