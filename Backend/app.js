const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
connectToDb();
const userRoutes = require('./routes/user.routes'); 
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.routes');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);


module.exports = app;