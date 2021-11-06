const formContacto = document.getElementById("formContacto");
const error = document.getElementById("error");


formContacto.addEventListener("submit", function(e){
    e.preventDefault();

    console.log('Enviando...');

    var mensajesError = [];
 
    if(emailContacto.value === null || emailContacto.value === ""){
        mensajesError.push ('Ingresa una direccion de correo')
    if(textoContacto.value === null || textoContacto.value === ""){
        mensajesError.push ('Ingresa tu mensaje')
    }
    error.style.display = "block";
    error.innerHTML = mensajesError.join(", ");
    
    }

});