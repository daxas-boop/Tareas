const $agregar = document.querySelector("#agregar");
const $quitar = document.querySelector("#quitar");
const $calcular = document.querySelector("#calcular");


$agregar.onclick = agregarInputs;
$quitar.onclick= removerInputs;




function agregarInputs(){
   
    let div = document.createElement("div");
    div.className="integrantes";
    let label =document.createElement("label");
    label.innerText="Salario anual integrante #" ;
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
    let $integrantes = document.querySelector(".integrantes")
    if($integrantes){
    $integrantes.remove();}
}

$calcular.onclick=function calcularSalario(){
    agarrarSueldos();
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

    calcularMenor(sueldos);
    calcularMayor(sueldos);
    calcularPromedioAnual(sueldos);
    calcularPromedioMensual(sueldos);
    
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
    for(let i= 0 ; i < sueldos.length ;i++){ 
        if(sueldos[i] == ""){
            errorSueldos[i] = "Ingrese un número en sueldos"
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
                alert (`${error[i]} en el integrante numero ${i +1} `)
            }else{
                inputs[i].classList.remove("error")
            }
        }
    }
    )
}