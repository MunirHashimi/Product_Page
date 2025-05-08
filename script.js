

let productIMage = document.querySelector("#product-image");
let btn = document.querySelectorAll(".btn");

btn[0].onclick = function () {
productIMage.src = "./1.jpg";
for(button of btn){
button.classList.remove("active");
}
this.classList.add("active");
};
btn[1].onclick = function () {
productIMage.src = "./2.jpg";
for(button of btn){
button.classList.remove("active");
}
this.classList.add("active");
};
btn[2].onclick = function () {
productIMage.src = "./3.jpg";
for(button of btn){
button.classList.remove("active");
}
this.classList.add("active");
};