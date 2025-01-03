const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
connectToDb();
const userRoutes = require('./routes/user.routes'); 
const cookieParser = require('cookie-parser');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});



module.exports = app;