// document.getElementById("si").addEventListener("click", signIn)
document.getElementById("su").addEventListener("click", signUp)

async function signUp(event) {
  event.preventDefault()
  const nameEl = document.getElementById("su_name").value;
  const passwordEl = document.getElementById("su_password").value;
  const cpasswordEl = document.getElementById("su_password-confirm").value;
console.log( nameEl, passwordEl)
   if (nameEl && passwordEl && passwordEl === cpasswordEl) {
 await Auth.check( nameEl, passwordEl)

  document.location.replace("/")
}}