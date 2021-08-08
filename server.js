const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
var dotenv = require("dotenv");
dotenv.config();
var cors = require('cors');


// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  var corsOptions = {
    origin: ["https://greybeing.azureedge.net","https://www.greybeing.com","http://127.0.0.1:5500"],
    optionsSuccessStatus: 200 // For legacy browser support
    }
    
    app.use(cors(corsOptions)); 

// Data parsing
app.use(express.urlencoded({
    extended: false
}));


//middleware
app.use(express.json())


app.post('/sendMail', (req, res) => {
    console.log(req.body)
    //send email
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        port: 587,
        secure: true,
        auth: {
            user:process.env.USER,
            pass:process.env.PASSWORD
        },
        debug: true
    });

const mailOptions = {
    from: req.body.contactName,
    to: process.env.USER,
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message
}

transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        console.log(error);
        res.send('error');
    }else {
        console.log('Email sent: ' + info.response);
        res.send('success')
    }
 })
});


app.get('/', (req, res) => {
    res.send('greybeing-API');
});

app.listen(process.env.PORT, () => console.log(`server is running on Port ${process.env.PORT}`))