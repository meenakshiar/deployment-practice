const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://meenakshi:meenakshi@cluster0.m0pw2ne.mongodb.net/deploy?retryWrites=true&w=majority")

module.exports = {
    connection
}