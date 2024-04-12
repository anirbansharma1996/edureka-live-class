const root = document.getElementById("root")
const URL = "https://official-joke-api.appspot.com/random_joke"


const fetchJoke =async()=>{
  try {
    const res = await fetch(URL)
    const data = await res.json()
    showJoke(data)
  } catch (error) {
    alert('something went wrong ... ')
  }
}

fetchJoke()


const showJoke =(joke)=>{
   root.innerHTML=""
   const main = document.createElement('div')
   main.className='main'
   const setup = document.createElement('h3')
   setup.innerText= "Soham : "+joke.setup
   const punchline = document.createElement('h4')
   punchline.innerText="Shreya : "+joke.punchline
   const id = document.createElement('span')
   id.innerText="#"+joke.id
   const type = document.createElement('h4')
   type.innerText=joke.type[0].toUpperCase()+joke.type.slice(1)
   const next = document.createElement("button")


   const info = document.createElement('div')
   info.className='info'
  
info.append(type,id)
   next.addEventListener("click",()=>{
    fetchJoke()
   })
   next.innerText="Click for More Laugh"
   main.append(info,setup,punchline,next)
   root.append(main)
}