const db = require('../db/queries');

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Messages', messages });
}

async function getNewMessage(req, res) {
  res.render('new-message', { title: 'New message' });
}

async function postNewMessage(req, res) {
  const {message, author} = req.body;
  await db.addNewMessage(message, author, new Date());
  res.redirect('/');
}

async function getMessageDetails(req, res) {
  res.render('message', {
    title: 'Message details',
    message: await db.getMessage(req.params.id),
  });
}

module.exports = {
  getMessages,
  getNewMessage,
  postNewMessage,
  getMessageDetails
};
