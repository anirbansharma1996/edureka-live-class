const { Mult, Sum, Div,customFetch } = require("./Opt.js");

// console.log(Sum(30, 90));
// console.log(Div(20));
// console.log(Mult(3, 9));

async function Test(){
    try {
        const res = await customFetch(true)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
//Test()
//---------------
console.log("DIR NAME IS -> ",__dirname)
console.log("FILE NAME IS -> ",__filename)
//--------------
