let menu_mobile = document.getElementById('menu_m');
let btn_menu = document.getElementById('btn_menu');
let touch_icon = btn_menu.getAttribute('touch');

//evento de escuta
btn_menu.addEventListener('click', showMenuMobile);

//function
function showMenuMobile(){
    if (touch_icon == 'false') {
        btn_menu.setAttribute('class', 'fa-solid fa-bars');
        menu_mobile.style.width = '0%'
        touch_icon = 'true'
    }else{
        btn_menu.setAttribute('class', 'fa-solid fa-x');
        menu_mobile.style.width = '85%'
        touch_icon = 'false'
    }
}
