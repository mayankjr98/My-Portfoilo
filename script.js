var typed= new Typed("#text" , {
    strings:["Full Stack Developer", "Web Designer" , "Programmer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop:true,
});


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle ('active');

}

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}