const _ = require('lodash')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mailer = require('express-mailer');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
const {Customer} = require('../models/customers');




//const MONGODB_URI = process.env.PORT || `mongodb://localhost:27017/DrRama` //to change
const MONGODB_URI = 'mongodb://admin:123dhruv@ds251022.mlab.com:51022/drrama' //to change




var mongoose = require('mongoose');

app.set('views', '/Users/dhruvmishra/Desktop/DrRama/drramaivf/server' + '/views');

app.set('view engine', 'pug');

// Configure express-mail and setup default mail data.
mailer.extend(app, {
  from: 'drramasbangalore@gmail.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'drramasbangalore@gmail.com',
    pass: 'RakhiMishra'
  }
});



mongoose.connect(`${MONGODB_URI}`,{ useNewUrlParser: true });





  //Routes
  app.get('/', (req, res, next) => {
    res.send('API root')
  })

  app.get('/ping', (req, res) => {
    
    res.status(200).send({
      'status':'pong'
    })
  
  
});
app.post('/callback', (req, res) => {
   
  var body = _.pick(req.body, ['full_name', 'email','phone','message']);
  console.log(body)
  var customer = new Customer(body);
  console.log(customer,'Customer')

  customer.save().then(() => {
      // console.log('fiart')
      err =   sendMail(customer)
      if(err){
        res.status(400).send(err);
      }else{
        res.status(200).send(customer)
      }
      //console.log(customer.email)
    
  }).catch((e) => {
    console.log('second')
    res.status(400).send(e);
  })
  // console.log('finished')
});

 function sendMail(customer){

  var mailOptions = {
    to: customer.email,
    subject: 'Email from SMTP sever',
    user: {  // data to view template, you can access as - user.name
      name: customer.full_name,
      message: customer.message
    }
  }
  console.log(customer)
  app.mailer.send('email', mailOptions, function (err) {
    if (err) {
      console.log(err);
      //res.send('There was an error sending the email');
      return err;
    }
    return;
  });
  // var mailOptions = {
  //   from: 'dhruv94mishra@gmail.com',
  //   to: customer.email,
  //   subject: 'Sending Email using Node.js',
  //   text: customer.message,
  //  // html: '<h1>Welcome</h1><p>That was easy!</p>'
  // };
  
  // transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });
}

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}