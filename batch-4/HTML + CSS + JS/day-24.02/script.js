//::::::::: PART - 1 ::::::::::::

const main_form = document.getElementById("main-form") // form
main_form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log('inside form')
})

const user_name = document.getElementById('user-name') // input box
user_name.addEventListener('input',(event)=>{
    console.log(event.target.value)
})

const user_gender = document.getElementById('user-gender') // select tag
user_gender.addEventListener('change',(event)=>{
    console.log(event.target.value)
})

// Real Life Example

main_form.addEventListener('submit',(e)=>{
     e.preventDefault()
     const user_name = document.getElementById('user-name').value
     const user_gender = document.getElementById('user-gender').value

     console.log(user_name,user_gender)
})

//::::::::: PART - 2 ::::::::::::

const key = document.getElementById("key-button");

key.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    console.log("clicked Enter Button");
  } else {
    console.log("clicked something else");
  }
});

//::::::::: PART - 3 ::::::::::::

const main = document.getElementById("mouse-div")

main.addEventListener('mouseover',()=>{
    main.style.backgroundColor='green'
})
main.addEventListener('mouseout',()=>{
    main.style.backgroundColor='red'
})
main.addEventListener('wheel',(e)=>{
   console.log(e.pageX,e.pageY)

})

//::::::::: PART - 4 ::::::::::::
const button = document.getElementById("main-button")
button.addEventListener('click',()=>{
    console.log('clicked')
})
button.addEventListener('dblclick',()=>{
    console.log('clicked')
})

//::::::::::: EXAMPLE - 1 ::::::::::
const toggle = document.getElementById('passkey-toggle')
const passkey = document.getElementById('passkey-text')

let flag = true
toggle.addEventListener('click',()=>{
    if(flag){
        passkey.type='text',
        toggle.innerText='hide'
    }else{
        passkey.type='password',
        toggle.innerText='show'
    }
    flag = !flag
})
//::::::::::: EXAMPLE - 2 ::::::::::

const mode = document.getElementById("mode");
const toggle_mode = document.getElementById("toggle-mode");
let state = true;
toggle_mode.addEventListener("click", () => {
  if (state) {
    mode.style.backgroundColor = "white";
    mode.style.color = "black";
  } else {
    mode.style.backgroundColor = "black";
    mode.style.color = "white";
  }
  state = !state;
});

//::::::::::: EXAMPLE - 3 ::::::::::

const like_count = document.querySelector("#like-count");
const like_button = document.querySelector("#like-button");

let count = 0;
like_button.addEventListener("click", () => {
    if (count === 10) {
        alert("good");
    } else if (count === 15) {
        alert("better");
    } else if (count === 20) {
        alert("best");
    }
    count = count + 1;
    like_count.innerText = count;
});
