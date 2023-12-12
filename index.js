//side menu
const sideMenu = document.getElementById("mobile-menu");

document.getElementById("open-menu").addEventListener("click", function () {
  sideMenu.style.display = "block";
});

document.getElementById("close-menu").addEventListener("click", function () {
  sideMenu.style.display = "none";
})


// Slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}

// Modal

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
} 

const modal = document.getElementById('modal01');

document.getElementById("btn1").addEventListener("click", function () {
  modal.style.display = "none";
});

onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}