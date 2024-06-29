const form = document.querySelector(".login-form");

form.addEventListener("submit", onForm);

function onForm(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  if (!data.email || !data.password) {
    alert("Все поля должны быть заполнены.");
  }
  evt.currentTarget.reset();
}
