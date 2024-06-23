const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const profileRoute = require('./routes/profile');
const uploadRoute = require('./routes/upload');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DBと接続');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/profile', profileRoute);
app.use('/api/upload', uploadRoute);

app.listen(PORT, () => {
  console.log('サーバを起動');
})