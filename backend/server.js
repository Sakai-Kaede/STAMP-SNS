const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const profileRoute = require('./routes/profile');
const uploadRoute = require('./routes/upload');
const postRoute = require('./routes/posts');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = 5000;
const path = require('path');

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DBと接続');
  })
  .catch((err) => {
    console.log(err);
  });

  app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/profile', profileRoute);
app.use('/api/upload', uploadRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => {
  console.log('サーバを起動');
})