var buttonContacts = document.querySelector('.button-contacts');
var popupFeedback = document.querySelector('.popup-feedback');
var popupFeedbackClose = document.querySelector('.button-feedback-close');

buttonContacts.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupFeedback.classList.add('popup-feedback-show');
});

popupFeedbackClose.addEventListener('click', function(evt) {
  popupFeedback.classList.remove('popup-feedback-show');
})