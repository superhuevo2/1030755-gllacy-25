var buttonContacts = document.querySelector('.button-contacts');
var popupFeedback = document.querySelector('.popup-feedback');
var popupFeedbackClose = document.querySelector('.button-feedback-close');
var feedbackInputName = popupFeedback.querySelector('[name=feedback-name]');
var feedbackSend = popupFeedback.querySelector('.button-feedback-send');
var feedbackInputMail = popupFeedback.querySelector('[name=feedback-email]');

buttonContacts.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupFeedback.classList.add('popup-feedback-show');
  feedbackInputName.focus();
});

popupFeedbackClose.addEventListener('click', function(evt) {
  popupFeedback.classList.remove('popup-feedback-show');
  popupFeedback.classList.remove('popup-error');
})

window.addEventListener('keydown', function(evt){
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupFeedback.classList.contains('popup-feedback-show')) {
      popupFeedback.classList.remove('popup-feedback-show');
      popupFeedback.classList.remove('popup-error');
    }
  }
})

feedbackSend.addEventListener('click', function(evt) {
  if (!feedbackInputName.value || !feedbackInputMail.value) {
    evt.preventDefault();
    popupFeedback.classList.remove('popup-error');
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add('popup-error');
  }
})