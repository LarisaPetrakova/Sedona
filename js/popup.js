var link = document.querySelector(".hotel-search");
var popup = document.querySelector(".hotel-form");
var datein = popup.querySelector("[name='date-in']");
var dateout = popup.querySelector("[name='date-out']");
var storage = localStorage.getItem("datein");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.toggle("hotel-form-show");
    if (storage) {
          datein.value = storage;
          dateout.focus();
        } else {
          datein.focus();
        };
    popup.classList.remove("modal-error");
});

popup.addEventListener("submit", function (event) {
     if (!datein.value || !dateout.value) {
         event.preventDefault();
         popup.classList.remove("modal-error");
         popup.offsetWidth = popup.offsetWidth;
         popup.classList.add("modal-error");
        } else {
          localStorage.setItem("datein", datein.value);
        }
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        popup.classList.contains("hotel-form-show");
        popup.classList.remove("hotel-form-show");
    }
});

