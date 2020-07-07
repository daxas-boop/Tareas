const $agregar = document.querySelector("#agregar");
const $quitar = document.querySelector("#quitar");
const $calcular = document.querySelector("#calcular");

$agregar.onclick=function agregarInputs(){
    let div = document.createElement("div");
    div.className="integrantes";
    let label =document.createElement("label");
    label.innerText="Salario anual integrante:";
    label.className="blanco"
    let input =document.createElement("input");
    input.type="number";
    input.placeholder="Ej. $250000"
    input.className="sueldos"
    div.appendChild(label)
    div.appendChild(input)
    document.body.appendChild(div)
}

$quitar.onclick=function removerInputs(){
    let $integrantes = document.querySelector(".integrantes")
    $integrantes.remove();
}

$calcular.onclick=function calcularSalario(){
    agarrarSueldos();
    
}



function agarrarSueldos(){
    const $sueldos= document.querySelectorAll(".sueldos")
    let sueldos = []
    for(let i =0;i< $sueldos.length;i++){
        if($sueldos[i].value === ""){
            continue;
        }
        sueldos.push(Number($sueldos[i].value));
    }
    calcularMenor(sueldos);
    calcularMayor(sueldos);
    calcularPromedioAnual(sueldos);
    calcularPromedioMensual(sueldos);
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
   $mayor.innerText=("El mayor sueldo anual es:" + mayor)
   $mayor.className="blanco mayor"
}



function calcularPromedioAnual(sueldos){
    let sumaSueldos=0;
    for(let i =0;i< sueldos.length;i++){
    sumaSueldos +=Number(sueldos[i])
    }
    let promedioAnual = sumaSueldos / sueldos.length
    const $promedioAnual = document.querySelector(".promedio-anual");
    $promedioAnual.innerText=("El promedio anual es:" + promedioAnual)
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
    $promedioMensual.innerText=("El promedio mensual es:" + promedioMensual)
    $promedioMensual.className="blanco promedio-mensual"
}