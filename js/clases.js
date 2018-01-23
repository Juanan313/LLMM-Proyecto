function openandCloseDiv() {
    var clases = document.getElementsByClassName("clases");
    for(i=0; i<=clases.length; i++){
    if (clases[i].style.display == "none") {
        clases[i].getElementById("toogle").style.display = "block"
        }
        else{
            clases[i].getElementById("toogle").style.display = "none";
        }           
}}

document.addEventListener("click", function(e){
    var elemento = e.target;
    if(elemento.className == 'clases'){
    openandCloseDiv();}
    });
