function Sum(a=0,b=0){
   return a+b
}
function Multiply(a=1,b=1){
   return a*b
}
function Division(a=1,b=1){
    return a/b
}

function Substraction(a=0,b=0){
    return a-b
}

function NavFn(){
    return (`
    <ul class='navbar-main'>
       <li>Home</li>
       <li>About</li>
       <li>Products</li>
       <li>Login</li>
    </ul>
    `)
}


export {Sum , Multiply , Division ,Substraction,NavFn} 