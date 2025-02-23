
let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container =document.querySelector(".container");


menuIcon.addEventListener("click", function() {
       let sidebars =   sidebar.classList.toggle("small-sidebar");
       console.log(sidebars);
       container.classList.toggle("large-container");
});