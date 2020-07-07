const $siguiente = document.querySelector(".siguiente");
const $limpiar = document.querySelector(".limpiar");
const $calcular =document.querySelector(".calcular");

$limpiar.onclick=function(){
    borrarInputs();
    ocultarResultados();
    removerCalcular();
    mostrarSiguiente();
}


$calcular.onclick=function(){
    agarrarEdades();
}


$siguiente.onclick = function familiares(){
    const cantidadFamiliares = Number(document.querySelector(".familiares").value)
    borrarInputs();
    crearInputs(cantidadFamiliares);
    mostrarCalcular();
    removerSiguiente();
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
        input.name=`edades`
        div.appendChild(input);
        document.getElementById("input").appendChild(div)
        $form.appendChild(div)
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
        edades.push(Number($edades[i].value));
    }
    const errorEdades = validarEdades(edades)
    
    calcularPromedio(edades);
    calcularMayor(edades);
    calcularMenor(edades);
    
    const errores = {
        edades: errorEdades,
    }
    
    manejarErrores(errores)
}


function calcularPromedio(edades){
    let sumaEdades = 0;
    for(let i =0 ;i< edades.length; i++){
        if(edades[i] >= 0){
        sumaEdades += edades[i];
        let promedio = sumaEdades /edades.length;
        mostrarPromedio(promedio);}}
    return ""
}

function calcularMenor(edades){
    for(let i = 0 ; i<edades.length;i++){ 
        if (edades[i] >= 0){
        let menor =  Math.min(...edades);
        mostrarMenor(menor);}}
    return ""
}

function calcularMayor(edades){
    for(let i =0 ; i<edades.length;i++){
    if(edades[i] >= 0){
    let mayor = Math.max(...edades);
    mostrarMayor(mayor);}}
    return ""
}


function mostrarMayor(mayor){
    let $mayor = document.querySelector(".mayor");
    $mayor.innerText=("El número mayor es:" + mayor)
    $mayor.className="mayor";
}

function mostrarMenor(menor){
    let $menor = document.querySelector(".menor");
    $menor.innerText=("El número menor es:" + menor)
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

function mostrarCalcular(){
    const familiares = Number(document.querySelector(".familiares").value)
    if(familiares){
        $form.calcular.classList.remove("oculto")
    }
}


function removerCalcular(){
    $form.calcular.classList.add("oculto")
}

function mostrarSiguiente(){
    $form.siguiente.classList.remove("oculto")
}

function removerSiguiente(){
    const familiares = Number(document.querySelector(".familiares").value)
    if(familiares){
        $form.siguiente.classList.add("oculto")
    }
}

//VALIDACIONES

const $form = document.querySelector("#formulario");
$form.onsubmit = validarFormulario;

function validarFormulario(event){
    const $form = document.querySelector("#formulario");
    let errorFamiliares = [];
    errorFamiliares = validarFamiliares($form.familiares.value);
    
    const errores ={
        familiares: errorFamiliares,
    }
    

    manejarErrores(errores)
    event.preventDefault();
}


function validarFamiliares(familiares){
    if(familiares.length === 0){
        return "Ingrese un número"
    }
    if(familiares <= 0){
        return "Ingrese un número mayor a 0"
    }
    if(!/^[0-9]+$/.test(familiares)){
        return "Ingrese solo números enteros"
    }
    return "";
}

function validarEdades(edades){
    let arrayErrores = [];
    debugger
    for(let i =0 ; i< edades.length;i++){
        if(edades[i] == ""){
            arrayErrores[i]= "La edad no puede estar vacia";
        }else{
            arrayErrores[i]="";
        }   
   }

   return arrayErrores;
}


function manejarErrores(errores){
    const familiares = Number(document.querySelector(".familiares").value)
    const input = document.querySelectorAll(".edades")
    const keys = Object.keys(errores)
    
    
    keys.forEach(function(key,i){
        const error = errores[key];
        
        if (keys == "edades"){
        for(let i=0;i<familiares;i++){
            const error = errores[key];
            if(error[i]){
                alert (`${error[i]} en el input #${i+1}`)
                ocultarResultados();
                input[i].classList.add("error")
            }else{
                input[i].classList.remove("error")}
            
        }}

        
        if(error && keys != "edades"){
            alert(error)
            $form.familiares.classList.add("error")
            ocultarResultados();
        }else{
            $form.familiares.classList.remove("error")
        }
        
 
    });
}