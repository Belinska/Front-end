const parent = document.getElementById("parent");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

parent.addEventListener("click", function (event) {
    const button = event.target.closest("button");
    if (!button) return;
    alert(button.textContent + " clicked");
});