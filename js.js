var input1 = document.querySelector("#color1");
var input2 = document.querySelector("#color2");
var body = document.querySelector("#body");
var bg1 = document.querySelector(".colo");
// var bg1 = document.querySelector("#bgcolor2")

function setbg () {
body.style.background = "linear-gradient(to right,"+ input1.value +","+ input2.value +")";
bg1.textContent = body.style.background + ";";
};
input1.addEventListener("input",setbg);
input2.addEventListener("input",setbg);
