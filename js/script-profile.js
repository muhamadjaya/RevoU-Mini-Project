const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Slider
var slideIndex = 1;
showBanner(slideIndex);

function navSlider(val) {
  showBanner((slideIndex += val));
}

function showBanner(val) {
  var i;
  var bannerList = document.getElementsByClassName("img-banner");

  if (val > bannerList.length) {
    slideIndex = 1;
  } else if (val < 1) {
    slideIndex = bannerList.length;
  }

  for (i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = "none";
  }

  bannerList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  navSlider(1);
}, 2000);
