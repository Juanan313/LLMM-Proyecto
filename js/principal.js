

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

// Abrir y cerrar el menu navegador y el titulo 
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

// funciones alert al clicar en los elementos del footer

var contact = "juanan.pujals@gmail.com"
    var about = "Gran parte de la información mostrada en esta página ha sido extraida de páginas relacionada con el mismo juego como: \\n whttps://worldofwarcraft.com/es-es/ \\n  http://www.wowchakra.com/ \\n http://es.wowhead.com/"
    var help = "Mmmm lo siento no lo he entendido bien, ¿para qué se supone que necesitas ayuda?"
    var privacy = "Gran parte de el contenido de esta página no es de mi propieda y no ha sido utilizado con animo de lucro, tan solo con fines lúdicos."

 
function footerExpandInfo(id) {
    

    alert(id);
}    