const $agregar = document.querySelector("#agregar");
const $quitar = document.querySelector("#quitar");
const $calcular = document.querySelector("#calcular");
const $reiniciar = document.querySelector("#reiniciar");
const $mostrarError = document.querySelector("#mostrar-error")

let errorCounter= 0;
let counter = 0;

$reiniciar.onclick= reiniciar;
$agregar.onclick = agregarInputs;
$quitar.onclick= removerInputs;
$calcular.onclick= agarrarSueldos;


function reiniciar(){
    errorCounter= 0;
    counter = 0;
    const $integrantes = document.querySelectorAll(".integrantes");
    $integrantes.forEach( function(integrante){
        integrante.remove();
    });
    $mostrarError.classList.add("oculto");
    const $mayor = document.querySelector(".mayor");
    const $menor = document.querySelector(".menor");
    const $promedioAnual = document.querySelector(".promedio-anual");
    const $promedioMensual = document.querySelector(".promedio-mensual");
    $menor.classList.add("oculto")
    $mayor.classList.add("oculto")
    $promedioAnual.classList.add("oculto")
    $promedioMensual.classList.add("oculto")
}

function agregarInputs(){
    counter++;
    let div = document.createElement("div");
    div.className="integrantes";
    let label =document.createElement("label");
    label.innerText=`Salario anual del integrante ${counter} `;
    label.className="blanco"
    let input =document.createElement("input");
    input.type="number";
    input.placeholder="Ej. $250000"
    input.className="sueldos"
    input.name="sueldos"
    div.appendChild(label)
    div.appendChild(input)
    document.body.appendChild(div)
}


function removerInputs(){
    let $integrantes = document.querySelectorAll(".integrantes")
    const $body = document.querySelector("body")
    if($integrantes.length >= 1){
        counter--;
        $body.removeChild($body.lastChild)
    }
}


function agarrarSueldos(){
    const $sueldos= document.querySelectorAll(".sueldos")
    let sueldos = []
    for(let i =0;i< $sueldos.length;i++){
        sueldos.push(Number($sueldos[i].value));
    }
    const errorSueldos = validarSueldos(sueldos);
    let errores ={
        sueldos: errorSueldos
    }
    let $integrantes = document.querySelectorAll(".integrantes")
    
    if (errorCounter <= 0 && $integrantes.length >= 1){
        calcularMenor(sueldos);
        calcularMayor(sueldos);
        calcularPromedioAnual(sueldos);
        calcularPromedioMensual(sueldos);
    }
    manejarErrores(errores)
}



function calcularMenor(sueldos){
    let menor= Math.min(...sueldos)
    const $menor = document.querySelector(".menor");
    $menor.innerText=("El menor sueldo anual es: " + menor)
    $menor.className="blanco menor"
}



function calcularMayor(sueldos){
   let mayor= Math.max(...sueldos)
   const $mayor = document.querySelector(".mayor");
   $mayor.innerText=("El mayor sueldo anual es: " + mayor)
   $mayor.className="blanco mayor"
}



function calcularPromedioAnual(sueldos){
    let sumaSueldos=0;
    for(let i =0;i< sueldos.length;i++){
    sumaSueldos +=Number(sueldos[i])
    }
    let promedioAnual = sumaSueldos / sueldos.length
    const $promedioAnual = document.querySelector(".promedio-anual");
    $promedioAnual.innerText=("El promedio anual es: " + promedioAnual)
    $promedioAnual.className="blanco promedio-anual"
}


function calcularPromedioMensual(sueldos){
    let sumaSueldos=0;
    for(let i =0;i< sueldos.length;i++){
    sumaSueldos +=Number(sueldos[i])
    }
    let promedioAnual =  sumaSueldos / sueldos.length
    let promedioMensual = promedioAnual / 12
    const $promedioMensual = document.querySelector(".promedio-mensual");
    $promedioMensual.innerText=("El promedio mensual es: " + promedioMensual)
    $promedioMensual.className="blanco promedio-mensual"
}


// VALIDACIONES

function validarSueldos(sueldos){
    let errorSueldos = [];
    errorCounter= 0;
    for(let i= 0 ; i < sueldos.length ;i++){ 
        if(sueldos[i] == ""){
            errorSueldos[i] = "Ingrese un número en sueldos"
            errorCounter++;
        }else{
            errorSueldos[i] = ""
        }
    }
    return errorSueldos
}


function manejarErrores(errores){
    const inputs = document.querySelectorAll(".sueldos")
    const keys = Object.keys(errores)
    keys.forEach(function(key){
        const error = errores[key]
        for(let i = 0; i < inputs.length;i++){
            if(error[i]){
                inputs[i].classList.add("error")
                $mostrarError.innerText=`Error :${error[i]}`
                $mostrarError.classList.remove("oculto")
            }else{
                $mostrarError.classList.add("oculto")
                inputs[i].classList.remove("error")
            }
        }
    });
}