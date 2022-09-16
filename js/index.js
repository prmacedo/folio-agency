const menu = document.querySelector(".js-menu");
const toggleMenuButtons = document.querySelectorAll(".js-toggle-menu-button");

toggleMenuButtons.forEach(button => {
  button.addEventListener("click", () => {
    menu.classList.toggle("menu--active")
  })
});