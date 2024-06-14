const express = require('express');
const app = express();

app.use('/api/user', userRoute);
app.use('/api/profile', profileRoute);
app.use('/api/upload'. uploadRoute);