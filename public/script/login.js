// document.getElementById("si").addEventListener("click", signIn)
document.getElementById("su").addEventListener("click", signUp)

async function signUp(event) {
  event.preventDefault()
  const nameEl = document.getElementById("su_name").value;
  const passwordEl = document.getElementById("su_password").value;
  const cpasswordEl = document.getElementById("su_password-confirm").value;
console.log( nameEl, passwordEl)
   if (nameEl && passwordEl && passwordEl === cpasswordEl) {
  const good = await Auth.check( nameEl, passwordEl)

  if(good) {
    console.log("123")
  document.location.replace("http://localhost:3001/")}
}}