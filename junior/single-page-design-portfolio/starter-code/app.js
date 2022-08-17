const slider = document.querySelector(".slider");
const slides = Array.from(document.querySelectorAll(".slide"));
const slideWidth = slides[0].getBoundingClientRect().width;
const btnLeft = document.querySelector(".slider-btn-left");
const btnRight = document.querySelector(".slider-btn-right");

let sliderItemNumber = Math.floor(slides.length / 2);
let sliderGap = slider.clientWidth > 1410 ? 30 : 15;
let counter = 2;

slider.style.transform = `translateX(-${counter * slideWidth + counter * sliderGap}px)`

btnRight.addEventListener('click', evt => {
  counter++;
  if (counter === slides.length)  counter = 0;
  slider.style.transform = `translateX(-${counter * slideWidth + counter * sliderGap}px)`
})

btnLeft.addEventListener('click', evt => {
  counter--;
  if (counter < 0)  counter = slides.length - 1;
  slider.style.transform = `translateX(-${counter * slideWidth + counter * sliderGap}px)`
})
