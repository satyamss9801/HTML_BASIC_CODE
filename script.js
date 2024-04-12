var counter = document.querySelector("#count");
let cnt = 1;

setInterval(() => {
    if (cnt <= 1000) {
        counter.innerText = cnt;
        cnt++;
    }
}, 1)

setTimeout(() => {
    document.getElementById("ptxt").innerText = "Hui";
}, 4200)

console.log(window.getComputedStyle(document.querySelector("#navbar")).margin);

var home = document.querySelector(".home");
var logo = document.querySelector("#logoflex");

const logocolor = logo.style.color;

home.addEventListener("mouseover", () => {
    logo.style.color = "red";
})

home.addEventListener("mouseout", () => {
    logo.style.color = logocolor;
})

var signBtn = document.querySelector(".sign");

signBtn.addEventListener("click", () => {
    alert("Cannot sign in!");
})

var about = document.getElementById("about");

about.addEventListener("click", () => {
    about.style.visibility = "hidden";
})