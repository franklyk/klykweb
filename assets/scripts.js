const btnMenu = document.getElementById('menu-btn');
function openMenu(){
    const header = document.getElementById('header');
    header.classList.toggle('active');
}
btnMenu.addEventListener('click', openMenu);



const btnMobile1 = document.getElementById('botao-1');
function subMenu1(){
    const menuList = document.getElementById('submenu1');
    menuList.classList.toggle('active');
}
btnMobile1.addEventListener('click', subMenu1);

const btnMobile2 = document.getElementById('botao-2');
function subMenu2(){
    const menuList = document.getElementById('submenu2');
    menuList.classList.toggle('active');
}
btnMobile2.addEventListener('click', subMenu2);

const btnMobile3 = document.getElementById('botao-3');
function subMenu3(){
    const menuList = document.getElementById('submenu3');
    menuList.classList.toggle('active');
}
btnMobile3.addEventListener('click', subMenu3);

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const  modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
    
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

