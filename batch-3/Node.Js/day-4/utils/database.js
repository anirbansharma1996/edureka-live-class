const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()
const Connect = async()=>{
   try {
      await mongoose.connect(process.env.MONGO_URI)
      console.log('database connected successfully')
   } catch (error) {
      console.log(error.message)
   }
}
module.exports = Connect
//MONGO_URI = "mongodb+srv://<username>:<password>@cluster0.pdsxni8.mongodb.net/<database name>"