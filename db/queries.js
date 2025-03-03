const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function addNewMessage(message, author, date) {
  await pool.query('INSERT INTO messages (text, author, added) VALUES ($1, $2, $3)', [message, author, date]);
}

async function getMessage(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [id]);
  return rows[0];
}

module.exports = {
  getAllMessages,
  addNewMessage,
  getMessage
};
