function Sum(a=0,b=0){
    return a+b
}
function Div(a){
  return a/10
}
const Mult = (a,b)=>{
   return a*b
}

function customFetch (state){
  return new Promise((resolve,reject)=>{
      console.log('pending...')
       setTimeout(() => {
          if(state===true){
            resolve("success")
          }else{
            reject("falied")
          }
       }, 2000);
  })
}



module.exports = {Sum, Mult ,Div,customFetch}