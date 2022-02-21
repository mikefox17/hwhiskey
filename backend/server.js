const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const { connectDB } = require('./config/db')
const port = process.env.PORT || 8000

connectDB()
const app = express()

app.use(express.json())
app.use(
    express.urlencoded({
        extended: false,
    })
)

app.use('/api/drams', require('./routes/dramRoutes'))
app.use(errorHandler)
//disable cors
/* app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
}) */

app.listen(port, () => console.log(`Server started on ${port} 🌎`))
