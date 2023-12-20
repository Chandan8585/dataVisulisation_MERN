const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const initRouter = require('./routes/initDB.router');
dotenv.config();
const connectDB = require('./config/dbConfig');
const app = express();
const Port = 8080;
app.use(cors());
app.use(express.json());

connectDB();
app.use('/initDB', initRouter);

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
  });