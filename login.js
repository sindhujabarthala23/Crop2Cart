document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  if(username && password) {
    alert(`Logged in as ${username}\nRemember me: ${remember}`);
    // Redirect to another page if needed
    // window.location.href = "index.html";
  } else {
    alert("Please fill in all fields.");
  }
});
