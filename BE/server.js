
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParse = require('cookie-parser')
const { json } = require('express')
const auth = require('./middleware/auth')
const authAdmin = require('./middleware/authAdmin')
const paypal = require('paypal-rest-sdk')
const { default: axios } = require('axios')
// const textFlow = require('textflow.js')
require('dotenv').config()

// const { Vonage } = require('@vonage/server-sdk');
// const vonage = new Vonage({
//     apiKey: "487c0b09",
//     apiSecret: "CkfLVzYlxb75wgHj"
// });



// const uri = "http://192.168.0.100:5000" //quan trong

const app = express()
app.use(express.json())
app.use(cookieParse())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))
app.set('view engine', 'ejs');

//Routes
app.use('/user', require('./routes/userRouter')) // sử dụng /user tương ứng trỏ đường dẫn /routes/userRouter
app.use('/api', require('./routes/categoryRouter')) // 
app.use('/api', require('./routes/upload')) // 
app.use('/api', require('./routes/productRouter')) // 

app.get("/success", (req, res) => {
    res.render("success")
})
app.get("/cancel", (req, res) => {
    res.render("cancel")
})

// app.get('/verify', async (req, res) => {
//     const {phone} = req.body
//     res.json("test")
//     vonage.verify.start({
//         number: `${phone}`,
//         brand: "Vonage"})
//         .then(resp => console.log("done++++"+resp.request_id))
//         .catch(err => console.error(err));

//     vonage.verify.check(REQUEST_ID, CODE)
//         .then(resp => console.log(resp))
//         .catch(err => console.error(err));
// })








//connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log("Connected to MONGODB")
})

app.get('/', (req, res) => {
    res.json({ msg: "Welcome to you" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("server in running on port", PORT)
})
