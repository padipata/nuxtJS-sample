const express =require( 'express')
const Builder =require('nuxt').Builder
const Nuxt= require('nuxt').Nuxt
const cookieParser = require('cookie-parser')
const wxLogin = require('../server/middleware/wx-login')
const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 5000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(cookieParser())

// app.use(wxLogin)
// Give nuxt middleware to express
app.use(nuxt.render)
// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
