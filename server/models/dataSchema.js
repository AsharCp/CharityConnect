const mongoose = require('mongoose')

const charitySchema = new mongoose.Schema({
    name:String,
    category:String,
    payAmount:Number
})

const charityModel = mongoose.model('Transactions',charitySchema)
module.exports = charityModel