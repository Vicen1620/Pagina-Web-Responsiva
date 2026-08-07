// HERO boton leer mas
const boton = document.getElementById("btnConocer");
const info = document.getElementById("infoExtra");

boton.addEventListener("click",()=>{

    info.classList.toggle("oculto");


    if (info.classList.contains("oculto")){
        boton.textContent = "Leer más";
        } else {
            boton.textContent = "Leer menos";}
});