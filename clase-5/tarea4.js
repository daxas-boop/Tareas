const numeros = document.querySelectorAll("li")
const promedi = document.querySelector("#texto1")
const pequeño = document.querySelector("#texto2")
const grande = document.querySelector("#texto3")
const frequente = document.querySelector("#texto4")

function array(){
    let array= [];
    for(let i =0;i<numeros.length;i++){
    array.push(Number(numeros[i].innerText))}
    return array;
}


function promedio(){
    const numeros = document.querySelectorAll("li")
    let promedio=0;
    for(let i =0;i<numeros.length;i++){
       promedio += Number(numeros[i].innerText)
    }
    return promedio / numeros.length;
}



function numeroMasPequeño(){
    let min = Math.min(...array())
    return min;
}


function numeroMasGrande(){
    let max = Math.max(...array())
    return max;
}

var arr=array();
var map = {};
var mostFrequentElement = arr[0];
function findMostFrequent(){
    for(var i = 0; i<arr.length; i++){
        if(!map[arr[i]]){
            map[arr[i]]=1;
        }else{
            ++map[arr[i]];
            if(map[arr[i]]>map[mostFrequentElement]){
                mostFrequentElement = arr[i];
            }
        }
    }
    return mostFrequentElement;
}

function cambiarTexto(){
    promedi.innerText=`El promedio es... ${promedio()}`
    pequeño.innerText=`El número más pequeño es... ${numeroMasPequeño()}`
    grande.innerText=`El número más grande es... ${numeroMasGrande()}`
    frequente.innerText=`El número más frequente es... ${findMostFrequent()}`
}

cambiarTexto();
array();
numeroMasGrande();
numeroMasPequeño();
findMostFrequent();
promedio();