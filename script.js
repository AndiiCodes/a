var typed = new Typed(".auto-type", {
  strings: [
    "Front-End Developer &#129321;",
    "Freelancer &#128578;",
    "Snapchat Lens Creator &#128519;",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.classList.add("show");
  mainMenu.classList.remove("hidden2");
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.classList.remove("show");
  mainMenu.classList.add("hidden");
  mainMenu.style.top = "-200%";
}
