var menuIcon = document.querySelector(".menu-icon")
var sidebarn = document.querySelector(".sidebar")
var container = document.querySelector(".container")

menuIcon.onclick = function(){
    sidebarn.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}