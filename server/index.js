
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3001
const mailer = require('express-mailer');

app.set('port', port)

// app.set('views', __dirname + '/views');

// app.set('view engine', 'pug');

// // Configure express-mail and setup default mail data.
// mailer.extend(app, {
//   from: 'dhruv94mishra@gmail.com',
//   host: 'smtp.gmail.com', // hostname
//   secureConnection: true, // use SSL
//   port: 465, // port for secure SMTP
//   transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
//   auth: {
//     user: 'dhruv94mishra@gmail.com',
//     pass: 'Dhruv1794@'
//   }
// });


// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)



  // Listen the server
  app.listen(port)
  consola.ready({
    message: `Server listening on http://${port}`,
    badge: true
  })
}
start()


  // "scripts": {
  //   "dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server",
  //   "build": "nuxt build",
  //   "start": "cross-env NODE_ENV=production node server/index.js",
  //   "generate": "nuxt generate"
  // },