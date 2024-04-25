const express = require("express")
const connect = require('./utils/database.js')
const BlogRoute = require("./router/blog.router.js")
const dotenv = require('dotenv')

dotenv.config()

const server = express()
server.use(express.urlencoded({ extended: true }));
server.use(express.json());


server.get("/",(req,res)=>{
    res.send('hello world')
})
server.use("/api/v1",BlogRoute)

server.listen(process.env.PORT,(err)=>{
    if(err) throw new Error
    connect()
    console.log(`http://127.0.0.1:${process.env.PORT}`)
})