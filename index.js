const navbar = document.querySelector('.list');
const navtoggle = document.querySelector(".burger-box");


navtoggle.addEventListener('click',()=>{
    const visibility = navbar.getAttribute('data-visible');
    
    if(visibility === "false"){
        navbar.setAttribute('data-visible' , "true");
        navtoggle.setAttribute('aria-expanded' , "true");
        navtoggle.style.backgroundColor = "#8ed8977a";
    }else{
        navbar.setAttribute('data-visible', "false");
        navtoggle.setAttribute('aria-expanded' , "false");
        navtoggle.style.backgroundColor = "white";
        navbar.style.transition = "0.4s ease-in";
    }
})

const header = document.querySelector('.navbar');
const sectionOne = document.querySelector(".home-box");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries , sectionOneObserver){
 entries.forEach(entry =>{
    if(!entry.isIntersecting && window.screen.width > 560){
        header.classList.add("nav-scrolled");
    }else{
        header.classList.remove("nav-scrolled");
    }
 })
},sectionOneOptions);

sectionOneObserver.observe(sectionOne);