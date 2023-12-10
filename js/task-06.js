document.addEventListener('DOMContentLoaded', function () {
  const inputElement = document.getElementById('validation-input');

  inputElement.addEventListener('blur', function () {
    validateInputLength(inputElement);
  });

  function validateInputLength(input) {
    const expectedLength = +input.getAttribute('data-length');
    const inputValue = input.value.trim();

    if (inputValue.length !== expectedLength) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
      input.classList.add('valid');
      }
      
  }
});
