const express = require('express');
const app = express();
const userRoute = require('./routes/user');
const profileRoute = require('./routes/profile');
const uploadRoute = require('./routes/upload');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DBと接続');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api/user', userRoute);
app.use('/api/profile', profileRoute);
app.use('/api/upload', uploadRoute);

app.listen(PORT, () => {
  console.log('サーバを起動');
})