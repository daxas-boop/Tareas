const $siguiente = document.querySelector(".siguiente");
const $limpiar = document.querySelector(".limpiar");
const $calcular =document.querySelector(".calcular");

$limpiar.onclick=function(){
    borrarInputs();
    ocultarResultados();
}


$calcular.onclick=function(){
    agarrarEdades();
}


$siguiente.onclick = function familiares(){
    const cantidadFamiliares = Number(document.querySelector(".familiares").value)
    borrarInputs();
    crearInputs(cantidadFamiliares);
}




function crearInputs(cantidadFamiliares){
    for(let i = 0;i < cantidadFamiliares; i++){
        let div = document.createElement("div")
        div.className="integrantes"
        let label = document.createElement("label");
        let index= i+1;
        label.innerText=("Edad del familiar #"+ index )
        div.appendChild(label);
        let input = document.createElement("input");
        input.type ="number"
        input.className="edades"
        div.appendChild(input);
        document.getElementById("input").appendChild(div)
    }
}


function borrarInputs(){
    let integrantes = document.querySelectorAll(".integrantes");
     for(let i = 0 ;i< integrantes.length; i++){
         integrantes[i].remove();
    }
}



function agarrarEdades(){
    const $edades = document.querySelectorAll(".edades");
    let edades =[];
    for(let i =0;i<$edades.length;i++){
        if($edades[i].value === ""){
            continue;
        }
        edades.push(Number($edades[i].value));
    }
    calcularPromedio(edades);
    calcularMayor(edades);
    calcularMenor(edades);
}


function calcularPromedio(edades){
    let sumaEdades = 0;
    for(let i =0 ;i< edades.length; i++){
        sumaEdades += edades[i];
    }
    let promedio = sumaEdades /edades.length;
    mostrarPromedio(promedio);
}

function calcularMenor(edades){
    let menor =  Math.min(...edades);
    mostrarMenor(menor);
}

function calcularMayor(edades){
    let mayor = Math.max(...edades);
    mostrarMayor(mayor);
}


function mostrarMayor(mayor){
    let $mayor = document.querySelector(".mayor");
    $mayor.innerText=("El numero mayor es:" + mayor)
    $mayor.className="mayor";
}

function mostrarMenor(menor){
    let $menor = document.querySelector(".menor");
    $menor.innerText=("El numero menor es:" + menor)
    $menor.className="menor";
}

function mostrarPromedio(promedio){
    let $promedio = document.querySelector(".promedio");
    $promedio.innerText=("El promedio es:" + promedio)
    $promedio.className="promedio";
}

function ocultarResultados(){
    let $promedio = document.querySelector(".promedio");
    $promedio.className="promedio oculto";
    let $menor = document.querySelector(".menor");
    $menor.className="menor oculto";
     let $mayor = document.querySelector(".mayor");
    $mayor.className="mayor oculto";
}