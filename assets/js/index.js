const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")
const navClick = document.querySelector(".nav-click")
const navClick2 = document.querySelector(".nav-click2")
const navClick3 = document.querySelector(".nav-click3")
const navClick4 = document.querySelector(".nav-click4")
const navClick5 = document.querySelector(".nav-click5")
const navClick6 = document.querySelector(".nav-click6")
const navClick7 = document.querySelector(".nav-click7")
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
    
})

navClick.addEventListener("click",()=>{
    navMenu.classList.remove("nav-menu_visible")
})

navClick2.addEventListener("click",()=>{
    navMenu.classList.remove("nav-menu_visible")
})
navClick3.addEventListener("click",()=>{
    navMenu.classList.remove("nav-menu_visible")
})
navClick4.addEventListener("click",()=>{
    navMenu.classList.remove("nav-menu_visible")
})
navClick5.addEventListener("click",()=>{
    navMenu.classList.remove("nav-menu_visible")
})
navClick6.addEventListener("click",()=>{
    navMenu.classList.remove("nav-menu_visible")
})
navClick7.addEventListener("click",()=>{
    navMenu.classList.remove("nav-menu_visible")
})


