const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar-list');
ham.addEventListener('click', () => {
  if (ham.className === 'hamburger') {
    ham.classList.add('close');
  } else if (ham.className === 'hamburger close') {
    ham.classList.remove('close');
    ham.classList.add('hamburgerback');
  } else if (ham.className === 'hamburger hamburgerback') {
    ham.classList.add('close');
    ham.classList.remove('hamburgerback');
  } else {
    ham.className = 'hamburger';
  }

  if (nav.className === 'navbar-list') {
    nav.classList.add('responsive');
  } else if (nav.className === 'navbar-list responsive') {
    nav.classList.add('responsiveReturn');
  } else if (nav.className === 'navbar-list responsive responsiveReturn') {
    nav.classList.remove('responsiveReturn');
  } else {
    nav.className = 'navbar-list';
  }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}