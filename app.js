const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/imgages', express.static(__dirname + 'public/imgages'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine
app.set('views', './src/views')
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
const newsRouter = require('./src/routes/routes')

app.use('/', newsRouter)

// Listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))