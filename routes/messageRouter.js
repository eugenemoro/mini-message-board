const express = require('express');
const messageRouter = express.Router();
const messageController = require('../controllers/messageController');

messageRouter.get('/', messageController.getMessages);

messageRouter.get('/new', messageController.getNewMessage);

messageRouter.post('/new', messageController.postNewMessage);

messageRouter.get('/message/:id', messageController.getMessageDetails);

module.exports = messageRouter;