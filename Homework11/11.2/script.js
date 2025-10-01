const text = document.querySelector('.text');
const button = document.getElementById('btn');

button.addEventListener('click', function () {
    text.classList.toggle('red');
});
