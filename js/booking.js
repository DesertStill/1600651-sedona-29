const bookingLink = document.querySelector(".button-hotels");
const bookingPopup = document.querySelector(".modal-booking");
const bookingClose = bookingPopup.querySelector(".modal-close");
const bookingForm = bookingPopup.querySelector(".booking-form");

bookingLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookingPopup.classList.add("modal-show");
});

bookingClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookingPopup.classList.remove("modal-show");
});

bookingForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
});
