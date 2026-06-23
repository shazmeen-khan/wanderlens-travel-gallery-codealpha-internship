//buttons

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(btn => {
btn.addEventListener("click", () => {

document.querySelector(".filter-btn.active")?.classList.remove("active");
btn.classList.add("active");

const filter = btn.dataset.filter;

galleryItems.forEach(item => {

if (filter === "all" || item.classList.contains(filter)) {
item.style.display = "block";
} else {
item.style.display = "none";
}

});

});
});

//light box

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const images = document.querySelectorAll(".gallery-item img");

let currentIndex = 0;

images.forEach((img, index) => {
img.addEventListener("click", () => {
lightbox.style.display = "flex";
lightboxImg.src = img.src;
currentIndex = index;
});
});

closeBtn?.addEventListener("click", () => {
lightbox.style.display = "none";
});

nextBtn?.addEventListener("click", () => {
currentIndex = (currentIndex + 1) % images.length;
lightboxImg.src = images[currentIndex].src;
});

prevBtn?.addEventListener("click", () => {
currentIndex = (currentIndex - 1 + images.length) % images.length;
lightboxImg.src = images[currentIndex].src;
});

lightbox?.addEventListener("click", (e) => {
if (e.target === lightbox) {
lightbox.style.display = "none";
}
});

document.addEventListener("keydown", (e) => {
if (lightbox.style.display === "flex") {
if (e.key === "Escape") lightbox.style.display = "none";
if (e.key === "ArrowRight") nextBtn.click();
if (e.key === "ArrowLeft") prevBtn.click();
}
});

//navbar scroll

window.addEventListener("scroll", () => {
const navbar = document.querySelector(".navbar");

if (!navbar) return;

if (window.scrollY > 50) {
navbar.style.padding = "15px 8%";
navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.1)";
} else {
navbar.style.padding = "20px 8%";
navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";
}
});

// counter

const counters = document.querySelectorAll(".stat-card h2");

function startCounter(counter) {

const target = +counter.dataset.target;
let current = 0;

const step = target / 100;

const interval = setInterval(() => {

current += step;

if (current >= target) {
counter.innerText = target + "+";
clearInterval(interval);
} else {
counter.innerText = Math.floor(current) + "+";
}

}, 20);

}

counters.forEach(counter => {
startCounter(counter);
});


//dark mode
document.addEventListener("DOMContentLoaded", () => {

const darkBtn = document.getElementById("darkMode");
const mobileDarkBtn = document.getElementById("mobileDarkMode");

//save theme
function applyTheme() {

if (localStorage.getItem("theme") === "dark") {
document.body.classList.add("dark");
} else {
document.body.classList.remove("dark");
}

updateButtons();
}

// update button text 
function updateButtons() {

if (darkBtn) {
darkBtn.innerHTML = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

if (mobileDarkBtn) {
mobileDarkBtn.innerHTML = document.body.classList.contains("dark")
? "☀️ Light Mode"
: "🌙 Dark Mode";
}

}

// toggle theme
function toggleTheme() {

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark") ? "dark" : "light"
);

updateButtons();
}

// init
applyTheme();

if (darkBtn) darkBtn.addEventListener("click", toggleTheme);
if (mobileDarkBtn) mobileDarkBtn.addEventListener("click", toggleTheme);

});
//footer  category
function filterGallery(category){

const items = document.querySelectorAll(".gallery-item");

// show all if "all"
if(category === "all"){
items.forEach(item => item.style.display = "block");
return;
}

// filter
items.forEach(item => {
if(item.classList.contains(category)){
item.style.display = "block";
}else{
item.style.display = "none";
}
});

}

document.querySelectorAll(".filter-btn, footer a").forEach(btn => {
btn.addEventListener("click", () => {
document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
btn.classList.add("active");
});
});

//menu
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

menuToggle.addEventListener("click", () => {

mobileMenu.classList.toggle("active");

menuToggle.innerHTML = mobileMenu.classList.contains("active")
? '<i class="fa-solid fa-xmark"></i>'
: '<i class="fa-solid fa-bars"></i>';

});

}

console.log("Script loaded successfully ✔");
