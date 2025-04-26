function mostrarMensaje(){
    alert("Hola, Bienvenidos a Mi Pagina")
}

/*validacion de formulario*/
function validarFormulario(){
    let nombre=document.getElementById("nombre").value;
    let email=document.getElementById("email").value;
    if (nombre=="" || email=="" ){
        alert("Todos los campos son obligatorios...");
        return false;
    }
    return true;
}