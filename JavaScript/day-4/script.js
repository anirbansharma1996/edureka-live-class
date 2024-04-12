//if ... else if ... else


// if{(condition true)
//   /// print
// }
// else if(condition true){
//    /// print
// }
// else{
//    /// print 
// }

var user = 'adMin'

if(user.toLowerCase() === 'admin'){
    document.write("accress granted")
}
else if (user === 'datascience') {
    document.write("data science dev")
}
else if (user === 'fswd') {
    document.write("fswd dev")
}
else if (user === 'devops') {
    document.write("devops dev")
}
else{
    document.write("you are a client")
}


var bill = 499

if(bill >= 1000){
   document.write(`You have to pay : $${bill-100}`)
}
else if ( bill >= 500 && bill <=999){
    document.write(`You have to pay : $${bill-50}`)
}
else{
    document.write(`You have to pay : $${bill}`)
}