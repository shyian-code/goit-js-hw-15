const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Передбачаємо перезавантаження сторінки

  const formData = new FormData(event.target); // Отримуємо дані форми

  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  if (formDataObject.email && formDataObject.password) {
    console.log(formDataObject); // Виводимо об'єкт із введеними даними в консоль
    event.target.reset(); // Очищаємо значення полів форми
  } else {
    alert('All fields must be filled in.');
  }
});