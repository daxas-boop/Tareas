const $calcular = document.querySelector("#calcular")
$calcular.onclick = calcularTiempo; 



function calcularTiempo(){
    validarFormulario();
    const segundosVideos = document.querySelectorAll(".segundo")
    let segundosTotales = 0;
    for(let i = 0 ; i< segundosVideos.length;i++){
        segundosTotales += Number(segundosVideos[i].value)
    }

    let minu = segundosTotales / 60;
    let rminuto = Math.floor(minu);
    segundos = (minu - rminuto)*60;
    segundosTotales = Math.round(segundos);

    const minutosVideos = document.querySelectorAll(".minuto")
    let minutosTotales = 0;
    for(let i = 0 ; i< minutosVideos.length;i++){
        minutosTotales += Number(minutosVideos[i].value)
    }

    let horas = minutosTotales / 60;
    let rhora = Math.floor(horas);
    minutos = (horas -rhora)*60;
    minutosTotales = Math.round(minutos) + rminuto;

    const horasVideos = document.querySelectorAll(".hora")
    let horasTotales = 0;
    for(let i = 0 ; i< horasVideos.length;i++){
        horasTotales += Number(horasVideos[i].value)
    }
    horasTotales= horasTotales+rhora; 

    const resultado = document.querySelector("#resultado")
    resultado.value =` Total: ${horasTotales}horas, ${minutosTotales}minutos, ${segundosTotales}segundos.`;
}
    
function validarFormulario(){
    const segundos = document.querySelectorAll(".segundo")
    const minutos = document.querySelectorAll(".minuto")
    const horas = document.querySelectorAll(".hora")
    errorSegundos = validarSegundos(segundos);
    errorMinutos = validarMinutos(minutos);
    errorHoras = validarHoras(horas);
   
   
    let errores ={
        segundos: errorSegundos,
        minutos:errorMinutos,
        horas:errorHoras
    } 
    
    manejarErrores(errores)
}

function validarSegundos(segundos){
    let errorSegundos = [];
    segundos.forEach( (segundo,i)=>{
        if(segundo.value === ""){
            errorSegundos[i]= "Ingresa un numero en Segundos";
        }else{
            errorSegundos[i]= "";
        }
    })
    return errorSegundos
}


function validarMinutos(minutos){
    let errorMinutos = [];
    minutos.forEach( (minuto,i)=>{
        if(minuto.value === ""){
            errorMinutos[i]= "Ingresa un numero en Minutos";
        }else{
            errorMinutos[i]= "";
        }
    })
    return errorMinutos;
}


function validarHoras(horas){
 let errorHoras = [];
    horas.forEach( (hora,i)=>{
        if(hora.value === ""){
            errorHoras[i]= "Ingresa un numero en Horas";
        }
        else{
            errorHoras[i]= "";
        }
    })
    return errorHoras
}

function manejarErrores(errores){
    const erroresKeys = Object.keys(errores);
    const $form = document.querySelector("#forma")
    const $error = document.querySelector("#errores")
    $error.innerHTML=""
    erroresKeys.forEach((key,i)=>{
        const error = errores[key]
        error.forEach((e,i)=>{
            if(error[i]){
                $form[key][i].classList.add("error")
            }else{
                $form[key][i].classList.remove("error")
            }
        })
        
    });
}