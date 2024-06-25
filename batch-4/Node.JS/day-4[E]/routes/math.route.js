const express = require('express')
const { Sum, Mult, Div, Sub } = require("../controller/math.controller.js");

const route = express()

route.post('/sum',Sum)
route.post('/mult',Mult)
route.post('/div',Div)
route.post('/sub',Sub)

module.exports = route