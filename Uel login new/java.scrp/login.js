function redirecttocorrectlink() {
  
}
const username = document. querySelector("#username").value;
const password = document. querySelector("#password").value;
const link = document.querySelector("#link").value;
  const role = document.querySelector("#role").value;

if (username === "Admin" && password==="password1"){
  window.location.href= link;
 } if (username === "Tpo" && password==="password2"){
    window.location.href= link;
}  if (username === "student" && password==="password3"){
  window.location.href= link;
}

else{ //show an error message to the user
}

// function redirectToCorrectLink(event) {
//   event.preventDefault(); // Prevent the form from submitting normally

//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
//   const role = document.getElementById('role').value;

//   if (role === "admin" && username === "Admin" && password === "password1") {
//     window.location.href = "https://tobzy11109.github.io/admindashboard1/admin dashboard.html";
//   } else if (role === "tpo" && username === "Tpo" && password === "password2") {
//     // Redirect to TPO page
//     window.location.href = "Tpo.html"; // Replace with the actual URL for TPO
//   } else if (role === "student" && username === "student" && password === "password3") {
//     // Redirect to Student page
//     window.location.href = "student.html"; // Replace with the actual URL for Student
//   } else {
//     // Handle incorrect credentials or roles
//     alert("Invalid username, password, or role. Please try again.");
//   }
// }

// document.querySelector('form').addEventListener('submit', redirectToCorrectLink);
