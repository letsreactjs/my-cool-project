let mobileMenuButton = document.getElementById("mobile-menu-button");
let siteMenu = document.getElementById("site-menu");
function toggleMobileMenu(){
  siteMenu.classList.toggle("toggled")
}
mobileMenuButton.addEventListener("click", toggleMobileMenu);
