const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
  const dataLength = Number(input.getAttribute('data-length'));
  const inputLength = input.value.length;

  if (inputLength === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});