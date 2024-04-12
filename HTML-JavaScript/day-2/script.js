const root = document.getElementById("root");
//navbar starts from here
const navbar = document.createElement("nav");
navbar.className = "navbar";

const ul = document.createElement("ul");
ul.className = "navbar-list";

const home = document.createElement("li");
home.innerText = "Home";
const about = document.createElement("li");
about.innerText = "About";
const gallery = document.createElement("li");
gallery.innerText = "Gallery";

ul.appendChild(home); 
ul.appendChild(about);
ul.appendChild(gallery);

navbar.appendChild(ul); 
// navbar ends here

// hero section starts here

const hero_div = document.createElement('div')
const hero_image = document.createElement('img')
hero_image.src="https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg"

hero_div.appendChild(hero_image)
//hero section ends here

//about section starts here 

const about_div = document.createElement('div')
about_div.className="about"

const about_div_img = document.createElement('div')
const about_image = document.createElement('img')
about_image.src="https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg"
about_div_img.appendChild(about_image)


const about_div_text = document.createElement('div')
const about_text = document.createElement('p')
about_text.innerText=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae sit, molestiae necessitatibus similique harum fuga optio! Possimus, labore tempora." 
about_div_text.appendChild(about_text)

about_div.appendChild(about_div_img)
about_div.appendChild(about_div_text)
//about section ends here

//gallery section starts here

const gallery_div = document.createElement('div')
gallery_div.className="gallery"


const imageOne = document.createElement('img')
imageOne.src="https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg"

const imageTwo = document.createElement('img')
imageTwo.src="https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg"
imageTwo.alt="not found 2"

const imageThree = document.createElement('img')
imageThree.src="https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg"

const imageFour = document.createElement('img')
imageFour.src="https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg"

gallery_div.appendChild(imageOne)
gallery_div.appendChild(imageTwo)
gallery_div.appendChild(imageThree)
gallery_div.appendChild(imageFour)


//gallery section ends here


// MAIN CONNECTION
root.append(navbar,hero_div,about_div,gallery_div); 

