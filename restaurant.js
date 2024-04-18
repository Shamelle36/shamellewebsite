
const slider = document.querySelector('.slider-content');
const slides = document.querySelectorAll('.slide');

let counter = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${counter * 100 / 3}%)`;
}

function nextSlide() {
  if (counter < slides.length - 3) {
    counter++;
    updateSlider();
  }
}

function prevSlide() {
  if (counter > 0) {
    counter--;
    updateSlider();
  }
}


//popup for restaurant

function openAlaEh() {
    document.getElementById("ala-eh-Popup").style.display="block";
}




  
  