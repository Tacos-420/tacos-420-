/*=========================================
TACOS 420
=========================================*/

//=========================
// MENU HAMBURGUESA
//=========================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

//=========================
// NAVBAR
//=========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

//=========================
// ANIMACIONES
//=========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll(

'.card,.menu-img img,.logo-container img,.social'

).forEach(el=>{

observer.observe(el);

});

//=========================
// BOTON ARRIBA
//=========================

const toTop=document.querySelector(".to-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

toTop.classList.add("active");

}else{

toTop.classList.remove("active");

}

});

//=========================
// PARALLAX HERO
//=========================

const hero=document.querySelector(".hero img");

window.addEventListener("scroll",()=>{

let value=window.scrollY;

hero.style.transform=`translateY(${value*0.15}px) scale(1.08)`;

});