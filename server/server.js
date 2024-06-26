const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const dotenv = require('dotenv').config();
const crypto = require("crypto");
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express();
const PORT = process.env.PORT
app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

const charityModel = require('./models/dataSchema')

// const uri = process.env.DATABASE_URI
mongoose.connect('mongodb://127.0.0.1:27017/CharityConnect');

app.post('/insert',(req,res)=>{
    charityModel.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))

})





app.post('/order',async (req,res)=>{
    try{

    const razorpay = new Razorpay({
        key_id:process.env.RAZORPAY_KEY_ID,
        key_secret:process.env.RAZORPAY_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if(!order){
        return res.status(500).send("Error");
    }
    res.json(order);
    }catch(err){
        console.log(err)
        res.status(500).send("Error");
    }
});

app.post("/order/validate", async (req,res)=>{
    const { razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;
    const sha = crypto.createHmac("sha256",process.env.RAZORPAY_SECRET);
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");
    if(digest!==razorpay_signature){
        return res.status(400).json({msg: "Transaction is not legit"});
    }
    res.json({
        msg: "success",
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
    });
})






app.listen(PORT,()=>{
    console.log(`Server is listening in port`,PORT)
})