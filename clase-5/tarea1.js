const botonEnviar = document.querySelector("#enviar");
const salarioMensual = document.querySelector("#salario-mensual");
const mostraSalarioAnual = document.querySelector("#salario-anual");
const mostraSalarioDiario = document.querySelector("#salario-diario")
const mostraSalarioHorario = document.querySelector("#salario-horario")
const $limpiar = document.querySelector("#limpiar")
let contadorErrores = 0;
botonEnviar.onclick = calcularSalarioMensual;
$limpiar.onclick= limpiar;

function limpiar(){
document.querySelector("#errores").innerHTML= "";
document.querySelector("#opcion-horas").classList.remove("error");
document.querySelector("#opcion-dias").classList.remove("error");
salarioMensual.classList.remove("error");
}

function calcularSalarioMensual(event){
    validarFormulario();
   if(cantidadErrores === 0){
    obtenerOpciones();
    const salarioAnual = salarioMensual.value *12
    mostrarSalarioAnual(salarioAnual);}
}


function calcularSalarioDiario(DiasTrabajados){
    const salarioDiario = Number(salarioMensual.value) / DiasTrabajados
    mostrarSalarioDiario(salarioDiario)
}

function calcularSalarioHorario(HorasTrabajadas){
    const salarioHorario = Number(salarioMensual.value) / HorasTrabajadas
    mostrarSalarioHorario(salarioHorario)
}

function mostrarSalarioAnual(salarioAnual){
    mostraSalarioAnual.value = salarioAnual + "$"
}

function mostrarSalarioDiario(salarioDiario){
    mostraSalarioDiario.value = salarioDiario + "$"
}

function mostrarSalarioHorario(salarioHorario){
    mostraSalarioHorario.value = salarioHorario + "$"
}



function obtenerOpciones(){
    const DiaTrabajados = Number(document.getElementById("opcion-dias").value);
    const HoraTrabajadas = Number(document.getElementById("opcion-horas").value);
    const DiasTrabajados = DiaTrabajados * 4 ;
    const HorasTrabajadas = HoraTrabajadas * DiasTrabajados;
    calcularSalarioDiario(DiasTrabajados)
    calcularSalarioHorario(HorasTrabajadas)
}




function validarFormulario(){
    const DiaTrabajados = Number(document.getElementById("opcion-dias").value);
    errorDiasSemana = [];
    errorDiasSemana = validarDiasSemana(DiaTrabajados)

    const HoraTrabajadas = Number(document.getElementById("opcion-horas").value);
    errorHorasTrabajadas=[];
    errorHorasTrabajadas = validarHorasTrabajadas(HoraTrabajadas)

    errorSalarioMensual = [];
    errorSalarioMensual =validarSalarioMensual(salarioMensual.value);



    errores={
        "salario-mensual":errorSalarioMensual,
        "opcion-horas":errorHorasTrabajadas,
        "opcion-dias":errorDiasSemana
    }

    manejarErrores(errores);
}


function validarSalarioMensual(salario){
    if(salario === ""){
        return "Ingrese un numero en 'Salario Mensual'"
    }
    if(!/^[0-9]+$/.test(salario)){
        return "Ingrese solo numeros en 'Salario Mensual'"
    }else{
        return "";
    }
}

function validarDiasSemana(diasSemana){
    if(diasSemana === 0){
        return "Seleccione una opcion en 'Dias de la Semana'"
    }else{
        return "";
    }
}

function validarHorasTrabajadas(HorasTrabajadas){
    if(HorasTrabajadas === 0){
        return "Seleccione una opcion en 'Horas Trabajadas'"
    }else{
        return "";
    }
}


function manejarErrores(errores){
    const $formulario = document.querySelector("#formulario");
    const $errores = document.querySelector("#errores")
    const errors = Object.keys(errores)
    $errores.innerHTML= "";
    cantidadErrores = 0;
    errors.forEach((error)=>{
        const errorin = errores[error]
        if(errorin){
            cantidadErrores++
        $formulario[error].classList.add("error")
        const h3 = document.createElement("h3");
        h3.innerText=(errorin)
        $errores.appendChild(h3)
        }else{
            $formulario[error].classList.remove("error")
        }
    });
    return cantidadErrores;
}