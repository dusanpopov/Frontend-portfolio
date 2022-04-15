const hamburgerContainer = document.querySelector(".main-navbar");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const links = document.querySelectorAll(".main-navbar__item");

hamburgerMenu.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("clicked");
    links.forEach((link) => {
        link.classList.toggle("fade");
    });
});
