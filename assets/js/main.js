let sideMenu = document.getElementById('side_menu')

function slideIn() {
    sideMenu.style.right = 0;
    sideMenu.style.left = '60%';
}

function slideOut() {
    sideMenu.style.right = '-100%';
    sideMenu.style.left = '100%';
}
