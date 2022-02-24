const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const { connectDB } = require('./config/db')
const cors = require('cors')
const port = process.env.PORT || 8000

connectDB()

const app = express()

app.use(
    cors({
        origin: 'http://localhost:3000',
    })
)

app.use(express.json())
app.use(
    express.urlencoded({
        extended: false,
    })
)

app.use('/api/drams', require('./routes/dramRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port} 🌎`))
