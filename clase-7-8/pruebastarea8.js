function probarvalidarNumeroFamiliares(){
    console.assert(
        validarNumeroFamiliares("42.3") === "En el campo Grupo Familiar ingresa solo numeros enteros", "La validacion para que el numero de familiares sea menor a 2 caracteres falló",
    );
}
function probarvalidarEdades(){
    console.assert(
        validarEdades("42.3") === "En el campo Grupo Familiar ingresa solo numeros enteros", "La validacion para que el numero de familiares sea menor a 2 caracteres falló",
    );
}

probarvalidarNumeroFamiliares();
probarvalidarEdades();