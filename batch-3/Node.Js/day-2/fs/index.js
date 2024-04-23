const fs = require("fs")

// var rf = fs.readFileSync('data.txt','utf-8')
// console.log(rf)

// var text = 'hello i am creating a write file'
// fs.writeFileSync("info.txt",text)
// console.log('created')

// var rf_2 = fs.readFileSync('data-2.txt','utf-8')
// fs.writeFileSync('info-2.txt',rf_2)
// console.log('created...')

//fs.unlinkSync('info-2.txt')
//fs.unlinkSync('data-2.txt')

//fs.mkdirSync('DIY')
//fs.rmdirSync("DIY")

// const rs = fs.createReadStream(__dirname+'/data.txt',"utf-8")
// rs.on('open',()=>{
//     console.log('file is open')
// })
// rs.on('data',(value)=>{
//   console.log(value)
// })

// const rs = fs.createReadStream(__dirname+"/data.txt",'utf-8')
// const ws = fs.createWriteStream("write.txt")

// rs.on('data',(value)=>{
//      ws.write(value)
// })

var rs = fs.createReadStream(__dirname+"/data.txt","utf-8")
const ws = fs.createWriteStream(__dirname+"/write.txt"
)
rs.pipe(ws)

