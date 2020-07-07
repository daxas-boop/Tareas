// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*
let nombreUsuario = prompt(`Como te llamas? `)
let miNombre ="matias"
let maradona ="maradona"

if(nombreUsuario.toLowerCase() === miNombre){
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}`)
}else if (nombreUsuario.toLowerCase() === maradona){
    console.log (`Hola ${nombreUsuario} te llamas igual que maradona`)
}else{
    console.log(`Hola ${nombreUsuario}`)
}
*/


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.


    /*
let edadUsuario = Number(prompt(`Que edad tenes? `))
const MI_EDAD = 24

if (edadUsuario === MI_EDAD){
    console.log(`Tenemos la misma edad!`)
}else if (edadUsuario > MI_EDAD){
    console.log(`Sos mas viejo que yo`)
}else if (edadUsuario < MI_EDAD){
    console.log(`Sos mas zoomer que yo`)
}else{
    console.log(`No entendi la respuesta`)
}
*/


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.



/*
let documento = (prompt("Tenes documento?") || '').toLowerCase();

if(documento === "si"){
   let edad = Number (prompt(`Que edad tenes`))

    if(edad >= 18){
        console.log(`Podes pasar al bar`)
    }else if (edad <= 18){
        console.log(`No podes pasar al bar`)
    }else{
        console.log (`No entendí la respuesta`)
    } 
}else if (documento === "no" ){
     console.log (`No podes pasar sin el documento`)
} 
else{
     console.log (`No entendí la respuesta`)
} 
*/