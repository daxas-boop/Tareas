let inputHuman = [];
let inputComputer = [];
let ronda = 0;

document.querySelector("#Empezar").onclick = empezarJuego;
    resetearInputs();
    bloquearInput();
    cambiarEstado("Haz click en 'Empezar' para jugar");


function empezarJuego(){
    resetearInputs();
    manejarRonda();
}

function manejarRonda(){
    bloquearInput();
    ronda++;
    cambiarEstado("Turno de la maquina");
    const $inputComputer = obtenerInputComputer()
    inputComputer.push($inputComputer)
    
    
    inputComputer.forEach(function(ele,i){
    let indice = i +1
        setTimeout(function(){
            cambiarOpacidadCuadro(inputComputer[i])
        },indice*1000)
    });
    
    
    const TIEMPO = (inputComputer.length) * 1000;
    setTimeout(function(){
        desbloaquearInput();
        cambiarEstado("Tu turno");
    },TIEMPO);
    

    cambiarRonda(ronda)
    inputHuman = [];
}


function calcularInputUsuario(e){
    const $cuadro = e.target;
    cambiarOpacidadCuadro($cuadro);
    inputHuman.push($cuadro);
    let indice = (inputHuman.length-1)
    
    if($cuadro !== inputComputer[indice]){
        perdiste();
        return;
    }
    
    if (inputHuman.length === inputComputer.length){
        bloquearInput();
        setTimeout(manejarRonda, 1000) 
        setTimeout(sonidoGanar, 500) 
    }
}


function perdiste(){
    cambiarEstado("PERDISTE! Haz click en 'Empezar' para jugar otra vez");
    bloquearInput();
    setTimeout(sonidoPerder, 250) 
}


function sonidoPerder(){
    document.getElementById('lose').play();
}

function sonidoGanar(){
    document.getElementById("win").play();
}


function cambiarRonda(ronda){
    let rondas = document.querySelector("#rondas")
    rondas.innerText=`# Rondas: ${ronda}`
}


function cambiarOpacidadCuadro($cuadro){
    $cuadro.style.opacity = 1;
    setTimeout(function(){ 
        $cuadro.style.opacity = 0.3;
    }, 500)
}

function cambiarEstado(estado){
    const $estado = document.querySelector(".estado")
    $estado.innerText = estado
}



function resetearInputs(){
    inputHuman = [];
    inputComputer = [];
    ronda = 0;
}


function bloquearInput(){
    document.querySelectorAll(".cuadro").forEach(function($cuadro){
        $cuadro.onclick = function(){}
        })
    }
    
function desbloaquearInput(){
    document.querySelectorAll(".cuadro").forEach(function($cuadro){
    $cuadro.onclick = calcularInputUsuario;
    })
}


function obtenerInputComputer(){
    let $cuadro = document.querySelectorAll(".cuadro")
    const indice = Math.floor(Math.random()* $cuadro.length)
    return $cuadro[indice]
}



// BUG mientras es tu turno  podes seguir clickeando