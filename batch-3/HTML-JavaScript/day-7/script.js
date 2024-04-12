document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.getElementsByClassName("slide-images");
     //console.log(slides)
    for (let i = 0; i <slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";

   setInterval(showSlides, 3000);
  }
});



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div id="slidshow">
//         <img class="slide-images" width="100%" height="300px" src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg" alt="image-1">
//         <img class="slide-images" width="100%" height="300px" src="https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg" alt="image-2">
//         <img class="slide-images" width="100%" height="300px" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="image-3">
//     </div>
//     <script src="script.js"></script>
// </body>
// </html>




//::::::::::::: UNDERSTANDING THE CODE :::::::::::::

// -----Event Listener----
// document.addEventListener("DOMContentLoaded", function () { ... });
// This event listener waits for the HTML document to be fully loaded before executing the JavaScript code inside it.


// ------ Initializing Variables -----
// let slideIndex = 0;
// slideIndex is a variable used to keep track of the current slide being displayed.



//------ Function showSlides --------

// function showSlides() { ... }
// This function is responsible for controlling the slideshow.
// const slides = document.getElementsByClassName("mySlides");
// It gets all elements with the class "mySlides" and stores them in the slides variable.

// ------ Hide All Slides -------
// for (let i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
// }
// This loop hides all slides by setting their display property to "none".

// ----- Increment Slide Index ------
// slideIndex = (slideIndex + 1) % slides.length;
// The slide index is incremented and wrapped around to 0 when it reaches the number of slides.


// ----- Display Current Slide ------
// slides[slideIndex].style.display = "block";
// It displays the current slide by setting its display property to "block".


// -----Change Slide Every 3 Seconds------
// [setTimeout(showSlides, 3000)];
// The setTimeout function is used to call the showSlides function again after a delay of 3000 milliseconds (3 seconds). This creates the continuous slideshow effect.