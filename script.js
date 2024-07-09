function handleSignUp() {
  let username = document.getElementById('userSignUpUsername').value;
  let password = document.getElementById('userSignUpPassword').value;

  if (localStorage.getItem(username)) {
    alert('User already exists! Please choose a different username.');
    return;
  }

  localStorage.setItem(username, JSON.stringify({ password }));

  alert('Sign up successful! Please proceed to sign in.');
}
function handleSignUpAdmin() {
  let nameAdmin = document.getElementById('adminSignUpUsername').value;
  let Adminpassword = document.getElementById('adminSignUpPassword').value;

  if (localStorage.getItem(nameAdmin)) {
    alert('User already exists! Please choose a different username.');
    return;
  }

  localStorage.setItem(nameAdmin, JSON.stringify({ Adminpassword }));

  alert('Sign up successful! Please proceed to sign in.');
}
function handleSignIn() {
  let usernameSu = document.getElementById('userSignInUsername').value;
  let passwordSu = document.getElementById('userSignInPassword').value;

  let userData = JSON.parse(localStorage.getItem(usernameSu));

  if (userData && userData.password === passwordSu) {
    alert('Sign in successful! Welcome, ' + usernameSu);
    location.href='userPage.html'
  } else {
    alert('Invalid username or password. Please try again.');
  }
}
function handleSignInAdmin() {
  let AdminName = document.getElementById('adminSignInUsername').value;
  let AdminPassword = document.getElementById('adminSignInPassword').value;

  let Data = JSON.parse(localStorage.getItem(AdminName));

  if (Data && Data.password === AdminPassword) {
    alert('Sign in successful! Welcome, ' + AdminName);
    location.href = 'adminPage.html'
  } else {
    alert('Invalid username or password. Please try again.');
  }
}
function adminSignUp() {
  window.location.href = 'adminSignup.html';
}

function userSignUp() {
  window.location.href = 'userSignup.html';
}
let Food = document.getElementById('Food')

function addFood() {
  let id = document.getElementById('FoodID').value
  let img = document.getElementById('FoodImg').value
  let description = document.getElementById('FoodDesc').value
  let price = document.getElementById('FoodPrice').value
  Food.innerHTML += `<div style="border: 3px solid black;border-radius: 50px; margin: 20px;">
    <h2>Id : ${id} </h2>
    <img src="${img}" alt="...">
    <h2>Description : ${description}</h2>
    <h2>Price : ${price}</h2>
</div>`
localStorage.setItem("Menu",Food.innerHTML )
}
var menu = document.getElementById("menu")
menu.innerHTML = localStorage.getItem("Menu")+


function logout(){
  location.href = 'SignUp.html'
}
