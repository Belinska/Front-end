const image = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
let index = Math.floor(Math.random() * image.length);
const img = document.getElementById("images");
img.src = "./images/" + image[index];
