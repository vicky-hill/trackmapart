const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_URI;

const connectDB = async () => {
    await mongoose.connect(uri);
 
    console.log(`MongoDB connected ...`);
};

module.exports = connectDB;