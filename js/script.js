const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Prompt visitor
var visitor = prompt("Masukkan nama kamu");
document.getElementById("nama-visitor").innerText =
  visitor.charAt(0).toUpperCase() + visitor.slice(1);

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

// Form Message Us
function handleSubmitForm() {
  // Mengambil value dari inputan
  let nama = document.forms["form-message-us"]["nama"].value;
  let tglLahir = document.forms["form-message-us"]["tgl-lahir"].value;
  let jenisKelamin = document.forms["form-message-us"]["jenis-kelamin"].value;
  let pesan = document.forms["form-message-us"]["pesan"].value;

  // Validasi inputan
  if (nama == "" || tglLahir == "" || jenisKelamin == "" || pesan == "") {
    alert("Input tidak boleh kosong!");
    return false;
  }

  // Menampilkan value dari inputan
  document.getElementById("submit-current-time").innerText = new Date();
  document.getElementById("submit-nama").innerText = nama;
  document.getElementById("submit-tgl-lahir").innerText = tglLahir;
  document.getElementById("submit-jenis-kelamin").innerText = jenisKelamin;
  document.getElementById("submit-pesan").innerText = pesan;
  return false;
}
