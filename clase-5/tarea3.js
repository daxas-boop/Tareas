const calcular = document.querySelector("#calcular")
calcular.onclick = function calcularTiempo(){
    
    const segundosVideos = document.querySelectorAll(".segundo")
    let segundosTotales = 0;
    for(let i = 0 ; i< segundosVideos.length;i++){
        segundosTotales += Number(segundosVideos[i].value)
    }

    let minu = segundosTotales / 60;
    let rminuto = Math.floor(minu);
    segundos = (minu - rminuto)*60;
    segundosTotales = Math.round(segundos);

    console.log(segundosTotales)



    const minutosVideos = document.querySelectorAll(".minuto")
    let minutosTotales = 0;
    for(let i = 0 ; i< minutosVideos.length;i++){
        minutosTotales += Number(minutosVideos[i].value)
    }

    let horas = minutosTotales / 60;
    let rhora = Math.floor(horas);
    minutos = (horas -rhora)*60;
    minutosTotales = Math.round(minutos) + rminuto;
    
    console.log(minutosTotales + rminuto)



    const horasVideos = document.querySelectorAll(".hora")
    let horasTotales = 0;
    for(let i = 0 ; i< horasVideos.length;i++){
        horasTotales += Number(horasVideos[i].value)
    }
    console.log(horasTotales + rhora)
    


    const resultado = document.querySelector("#resultado")
    resultado.value =horasTotales + rhora + ":" + minutosTotales  + ":" +segundosTotales;
}
    
