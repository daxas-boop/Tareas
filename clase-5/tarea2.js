let contadorErrores = 0 ;
const enviar = document.querySelector("#enviar");
const titulo = document.querySelector("#titulo");
const $errores = document.querySelector("#errores");
const $formulario= document.querySelector("#formulario")
enviar.onclick = cambiarNombre;


function cambiarNombre(){
    validacionDeFormulario();
    if(contadorErrores === 0){
        const nombre = document.querySelector("#nombre").value;
        const apellido = document.querySelector("#apellido").value;
        titulo.innerText = `Bienvenido ${nombre} ${apellido} `
    }else{
        titulo.innerText = `Bienvenido `
    }
    
}

function validacionDeFormulario(){
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    errorNombre = validacionDeNombre(nombre);
    errorApillido = validacionDeApellido(apellido);

    errores={
        "nombre": errorNombre,
        "apellido": errorApillido
    }
    manejarErrores(errores);
    
}
function manejarErrores(errores){
    const erroresKeys = Object.keys(errores);
    $errores.innerHTML="";
    contadorErrores=0;
    erroresKeys.forEach((key) => {
        const error = errores[key];
        if(error){
            contadorErrores++
            $formulario[key].classList.add("error")
            const h3 = document.createElement("h3");
            h3.innerText=(error)
            $errores.appendChild(h3);
        }else{
            $formulario[key].classList.remove("error")
        }
    }); 
}


function validacionDeNombre(nombre){
    if(nombre.length > 12){
        return "Ingrese un nombre con menos de 12 caracteres"
    }
    if(nombre === ""){
        return "Ingrese un nombre"
    }
    if(!/^[A-z]+$/.test(nombre)){
        return "Ingrese un nómbre solo con letras"
    }
    else{
        return ""
    }

}
function validacionDeApellido(apellido){
    if(apellido.length > 12){
        return "Ingrese un apellido con menos de 12 caracteres"
    }
    if(apellido === ""){
        return "Ingrese un apellido"
    }
    if(!/^[A-z]+$/.test(apellido)){
        return "Ingrese un apellido solo con letras"
    }
    else{
        return ""
    }
}