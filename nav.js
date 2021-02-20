let menu = document.getElementById("small-hide");
let navList = document.getElementById("navList");



menu.addEventListener("click", function(){
    // navList.style.animation = "0.5s ease";
    navList.classList.toggle("hide");
    navList.style.animation = "0.5s ease forwards";
    
    
})