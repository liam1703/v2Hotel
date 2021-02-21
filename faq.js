let faqDropdown = document.getElementsByClassName('arrow-container');
let answer = document.getElementsByClassName("faq-ans");

for(let i = 0;i<faqDropdown.length;i++){
    faqDropdown[i].addEventListener("click", function(){    
        answer[i].classList.toggle("hide");
    })
}