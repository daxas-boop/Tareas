function probarValidarFamiliares(){

    console.assert(
        validarFamiliares("") === "Ingrese un número", "La validacion en validar familiares no comprobo que un numero sea ingresado"
    );
    
    console.assert(
        validarFamiliares("-13") === "Ingrese un número mayor a 0","La validacion en valida familiares no comprobo  que el numero ingresado no sea menor a 0"
    );

    console.assert(
        validarFamiliares(".") === "Ingrese solo números enteros", "La validacion en validar familiares no comprobo que solo ingresen números.",
    );

    console.assert(
        validarFamiliares("3") === "" , "La validacion fallo con un numero valido"
    );


}

probarValidarFamiliares();