let url = "";

document.getElementById("btn").addEventListener("click", function () {
  url = prompt("Enter the URL:");
});

document.getElementById("secondButton").addEventListener("click", function () {
  window.location.href = url;
});
