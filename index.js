const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    // We will be coding here
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
     // Read variables sent via POST from our SDK
     const { sessionId, serviceCode, phoneNumber, text } = req.body;

     let response = '';
 
     if (text == '') {
         // This is the first request. Note how we start the response with CON
         response = `CON What would you like to check
         1. My account
         2. My phone number`;
     } else if ( text == '1') {
         // Business logic for first level response
         response = `CON Choose account information you want to view
         1. Account number
         2. Account balance`;
     } else if ( text == '2') {
         // Business logic for first level response
         // This is a terminal request. Note how we start the response with END
         response = `END Your phone number is ${phoneNumber}`;
     } else if ( text == '1*1') {
         // This is a second level response where the user selected 1 in the first instance
         const accountNumber = 'ACC100101';
         // This is a terminal request. Note how we start the response with END
         response = `END Your account number is ${accountNumber}`;
     } else if ( text == '1*2') {
         // This is a second level response where the user selected 1 in the first instance
         const balance = 'KES 10,000';
         // This is a terminal request. Note how we start the response with END
         response = `END Your balance is ${balance}`;
     }
 
     // Print the response onto the page so that our SDK can read it
     res.set('Content-Type: text/plain');
     res.send(response);
     // DONE!!!
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
