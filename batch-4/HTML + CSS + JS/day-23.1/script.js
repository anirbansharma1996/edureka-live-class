const root = document.getElementById("id-root")
const root_cl = document.getElementsByClassName('class-root')
const tag = document.getElementsByTagName('div')
const q = document.querySelector("#id-root")
const q1 = document.querySelector('.class-root')
const user = document.getElementById('user_name')
user.innerText='Edureka'
user.style.color="green"

const data = document.createElement('p')
data.innerText="this is a p tag"
const food_img = document.createElement('img')
food_img.src= "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=sph"
food_img.style.width = "100%"
// root.appendChild(food_img)
// root.appendChild(data)


const btn_div = document.createElement('div')
btn_div.className='button-div'

const btn1 = document.createElement('button')
btn1.innerText="Add to Cart"
const btn2 = document.createElement('button')
btn2.innerText="Eat Now"

btn_div.append(btn1,btn2)

root.append(food_img,btn_div)


root_cl.innerHTML=`<h1>Anirban Sharma</h1>
                <p>Software Consultant</p>

`
