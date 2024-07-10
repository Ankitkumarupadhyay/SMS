let openNav=document.getElementById("openNav");
let closeNav=document.getElementById("closeNav");
let navLinks=document.getElementById("navLinks");
let navbar=document.querySelector(".navbar");
let toTop=document.querySelector("#to-top");



// Responsive nav
openNav.addEventListener("click",()=>{
    navLinks.style.display='flex';
    navLinks.style.flexDirection='column';
    // navLinks.style.backgroundColor='rgb(255, 163, 5)';
    // navLinks.style.backdropFilter='blur(5rem)';
    navLinks.style.position='absolute';
    navLinks.style.right='0';
    // navLinks.style.height='50vh';
    navLinks.style.top='4rem';
    navLinks.style.lineHeight='3rem';
    openNav.style.display="none";
    closeNav.style.display="block";
    closeNav.style.zIndex="10";

})
closeNav.addEventListener("click",()=>{
    navLinks.style.display='none';
    openNav.style.display="block";
    closeNav.style.display="none";

})

// Effect of third page

let fixed = document.querySelector("#fixed-image");
let elemC = document.querySelector(".elem-container");
let elem=document.querySelectorAll(".elem");

elemC.addEventListener("mouseenter", () => {
    fixed.style.display = "block";
})
elemC.addEventListener("mouseleave", () => {
    fixed.style.display = "none";
})
elem.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        let image=e.getAttribute("data-image");      
        fixed.style.backgroundImage=`url(${image})`;
    })    
})

// back to top btn 
window.addEventListener("scroll",()=>{
    if(window.pageYOffset  <250){
        toTop.style.display="none";
    }
    else{
        toTop.style.display="flex";
    }
})

