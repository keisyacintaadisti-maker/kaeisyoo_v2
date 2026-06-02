window.addEventListener("scroll", () => {

const nav = document.querySelector("nav");

if(window.scrollY > 50){
nav.style.boxShadow = "0 5px 20px rgba(128,0,32,0.5)";
}else{
nav.style.boxShadow = "none";
}

});
