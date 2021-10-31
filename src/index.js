require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4000


console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// statics files
app.use(express.static(path.join(__dirname, 'public')))

// get
app.get('/', (req, res) => {
  res.render('index')
})

app.use(require('./routes/index'))
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))