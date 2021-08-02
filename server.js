const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const path = require('path');
const nodemailer = require('nodemailer');
var dotenv = require("dotenv");
dotenv.config();

// Data parsing
app.use(express.urlencoded({
    extended: false
}));

//middleware
app.use(express.json())
app.use(express.static('public'));

app.post('/', (req, res) => {

    //send email
    console.log(req.body)
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
    from: req.body.email,
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
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`))