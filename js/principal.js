

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