var link = document.querySelector(".hotel-search");
var popup = document.querySelector(".hotel-form");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.toggle("hotel-form-show");
});

popup.addEventListener("submit", function (event) {
        event.preventDefault();
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        popup.classList.contains("hotel-form-show");
        popup.classList.remove("hotel-form-show");
    }
});