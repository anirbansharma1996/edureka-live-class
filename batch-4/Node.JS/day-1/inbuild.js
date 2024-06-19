const fs = require('fs')

const rf = fs.readFileSync('hello.txt','utf-8')
const text = 'hello , i am from write file sync, and reading again'
fs.writeFileSync('note.txt',text)
fs.unlinkSync('note.txt')
console.log('deleted')