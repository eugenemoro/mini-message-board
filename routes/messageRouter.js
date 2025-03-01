const express = require('express');
const messageRouter = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

messageRouter.get('/', (req, res) => {
  res.render('index', { title: 'Messages', messages });
});

messageRouter.get('/new', (req, res) => {
  res.render('new-message', { title: 'New message' });
});

messageRouter.post('/new', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect('/');
});

messageRouter.get('/message/:id', (req, res) => {
  res.render('message', {
    title: 'Message details',
    message: messages[req.params.id],
  });
});

module.exports = messageRouter;