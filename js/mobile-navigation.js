const buttonMobile = document.getElementById("button-mobile");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  console.log(nav);
}

buttonMobile.addEventListener("click", toggleMenu);
