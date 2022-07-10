//import validator from 'validator';
const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-signup');
  //const email = document.querySelector('#email-signup').value.trim();
  const passwordEl = document.querySelector('#password-input-signup');
// console.log(username,email,password);
//   if (username && email && password) {
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      //email,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' }
  });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
//}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);

