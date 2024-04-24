const welcomeNote = (req,res)=>{
   try {
    res.status(200).send("welcome user")
   } catch (error) {
    res.status(503).send(error.message)
   }
}


const showdataOne = (req,res)=>{
   try {
     let user = {name:"Soham",age:25}
      res.status(200).send(user)
   } catch (error) {
      res.status(503).send(error.message)
   }
}
const showdataTwo = (req,res)=>{
    try {
      let user = {name:"Shreya",age:15}
       res.status(200).send(user)
    } catch (error) {
       res.status(503).send(error.message)
    }
 }

module.exports = {showdataOne,showdataTwo,welcomeNote}