const {showdataOne,showdataTwo,welcomeNote} = require("../controller/test.controller.js")
const express = require("express")
const route = express()

route.get("/",welcomeNote)
route.get("/soham",showdataOne)
route.get("/shreya",showdataTwo)

module.exports = route