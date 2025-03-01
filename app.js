const path = require('path');
const express = require('express');
const app = express();

const messageRouter = require('./routes/messageRouter')

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.use('/', messageRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
