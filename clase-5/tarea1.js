const botonEnviar = document.querySelector("#enviar");
const salarioMensual = document.querySelector("#salario-mensual");
const mostraSalarioAnual = document.querySelector("#salario-anual");
const mostraSalarioDiario = document.querySelector("#salario-diario")
const mostraSalarioHorario = document.querySelector("#salario-horario")




botonEnviar.onclick = function calcularSalarioMensual(event){
    obtenerOpciones();
    const salarioAnual = salarioMensual.value *12
    mostrarSalarioAnual(salarioAnual);
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