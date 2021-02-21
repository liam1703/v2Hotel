let menu = document.getElementById("small-hide");
let navList = document.getElementById("navList");
let navLinks = document.getElementsByClassName('hidden-listlink');


menu.addEventListener("click", function(){
    // navList.style.animation = "0.5s ease";
    navList.classList.toggle("hide");
    navList.style.animation = "0.5s ease forwards";
    
    
})






for(let i = 0;i<navLinks.length;i++){
    navLinks[i].addEventListener("click", function(){    
        navList.classList.toggle("hide");
    })
}