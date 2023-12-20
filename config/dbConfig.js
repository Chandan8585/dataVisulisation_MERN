const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = async()=>{
    try {
       const connection = await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
        connection.connection.on('error', (err)=>{
            console.error('MongoDB connection error', err);
        })
        connection.connection.on('disconnected',()=> {
            console.log('MongoDB disconnected');
        } )
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
};


module.exports = connectDB;
