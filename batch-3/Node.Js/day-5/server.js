const express = require('express')
const dotenv = require("dotenv")
const connectDB = require("./utils/database.js")
const AuthRoute = require("./routes/user.route.js")


dotenv.config()

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.get('/', (req, res) => res.send('hello'))
server.use('/api/v1',AuthRoute)

server.listen(process.env.PORT, () => {
  connectDB()
  console.log(`http://127.0.0.1:${process.env.PORT}`)

})