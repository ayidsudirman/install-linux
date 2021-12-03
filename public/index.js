const menu = document.querySelector("#menu");
const menuList = document.querySelector("#menu-list");

menu.addEventListener("click", () => {
  if (menuList.classList.contains("hidden")) {
    menuList.classList.remove("hidden");
  } else {
    menuList.classList.add("hidden");
  }
});
