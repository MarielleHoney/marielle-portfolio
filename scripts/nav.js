document.addEventListener("DOMContentLoaded", function () {
  console.log("Navbar script is running!");

  fetch("../components/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    });
});
