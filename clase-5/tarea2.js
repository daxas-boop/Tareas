
const enviar = document.querySelector("#enviar");
const titulo = document.querySelector("#titulo");

enviar.onclick = function cambiarNombre(){
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;

    titulo.innerText = `Bienvenido ${nombre} ${apellido} `
}


