const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();

mongoose.set('strictQuery', true);

const url = process.env.URL

const connection = mongoose.connect(url)

module.exports = {
    connection
}