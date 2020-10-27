const link = document.querySelector('.button-hotels');
const popup = document.querySelector('.modal-booking');
const form = document.querySelector('form');


form.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log(form.classList.add('modal-show'));
});
