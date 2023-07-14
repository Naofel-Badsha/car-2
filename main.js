//_______________NavBar___________Star_______________//
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

  menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

  window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
//_______________NavBar___________Star_______________//



//------------Login------------Button---------------//
document.querySelector('#loginBtn').onclick = () => {
    document.querySelector('.loginFormomContainer').classList.toggle('active')
};

document.querySelector('#CloseLoginForm').onclick = () => {
    document.querySelector('.loginFormomContainer').classList.remove('active')
};
//------------Login------------Button---------------//