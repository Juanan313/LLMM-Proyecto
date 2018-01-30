

/* Abrir y cerrar barra social lateral */
function closeSideBar() {
    element = document.getElementById("xsocial");
    element.style.display = "none";
    button = document.getElementById("right");
    button.style.display = "block";
}

function openSideBar() {
    element = document.getElementById("xsocial");
    element.style.display = "block";
    button = document.getElementById("right");
    button.style.display = "none";
}

function openCloseNav() {
    element = document.getElementsByClassName("menunav");
    menu = document.getElementById("menu");
    title = document.getElementById("title");
    if (element[0].style.display != "none"){
        element[0].style.display = "none";
        menu.style.display = "block";
        title.style.display = "none";
    } else {
        element[0].style.display = "block";
        menu.style.display = "none";
        title.style.display = "block";
    }
}