const formContacto = document.getElementById("formContacto");
const error = document.getElementById("error");
const success = document.getElementById("success");

formContacto.addEventListener("submit", function(e){
    e.preventDefault();

    console.log('Enviando...');

    var mensajesError = [];
    var mensajesSuccess = [];
 
    if(emailContacto.value === null || emailContacto.value === ""){
        mensajesError.push ('Ingresa una direccion de correo')
    if(textoContacto.value === null || textoContacto.value === ""){
        mensajesError.push ('Ingresa tu mensaje')
    }
    error.style.display = "block";
    error.innerHTML = mensajesError.join(", ");
    
    }
    
    if(emailContacto.value != null){
        mensajesSuccess.push ('Mensaje enviado')
    if(textoContacto.value != null){
        mensajesSuccess.push (' nos comunicaremos a la brevedad!')
    }
        success.style.display = "block";
        success.innerHTML = mensajesSuccess.join(", ");
    }
    

});