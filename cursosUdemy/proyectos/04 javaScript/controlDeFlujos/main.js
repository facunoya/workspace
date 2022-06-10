// Control de flujo!

console.log("Control de flujo: if");

if (true) { //"if", ejecuta el valor si es true, lo saltea si es false. 
    console.log("Estoy dentro de un if");
}


const edad = 10;

if (edad > 8 && edad < 15) {
    console.log("Puede jugar!");
} else if (edad < 8) {
    console.log("Este juego, es para mayores de 8 años");
} else {
    console.log("Este juego, es para menores de 15 años");
}





//while

console.log("Control de flujo: while");

let x = 0;
while ( x < 5) {
    console.log(x);
    x++;    
//el while se va a repetir, hasta obtener un false. Luego para a lo que siga afuera del {}
//es por esto, que el console.log("terminado el loop") lo ponemos fuera de la llave
// si estuviese dentro de la llave se repetiria al final de cada punto del loop.   
}

console.log("fin del loop");

let y = true;
while (y) {
    console.log(y);
    y = false; // esto hace que el loop no sea infinito.
}




//switch

console.log("control de flujo: switch")


switch (1) { //() puede llevar datos o incluso una variable.
    case 1: { //las llaves del case pueden ir o no, es indistinto.
        console.log("Yo soy el caso 1");
        break; // break es para que no se sigan ejecutando los demás casos!
        }
    case 2: console.log("Chanchito feliz");
        break;
    case 3: console.log ("Chanchito triste");
        break;
    default: console.log("No hay chanchitos!");   
        break;
}





//for

console.log("control de flujo: for");

for (let i = 0; i <= 10; i++) {
    console.log(i);
    
}

console.log("fin del loop");



// llamado a los arreglos
console.log("llamando arreglos");


var numeros = [ 1, 2, 3, "Hola", 5];
// hubicacion:  0, 1, 2,    3,   4     con estos valores, puedo llamarlos individualmente.
console.log(numeros[2]);
console.log(numeros[3]);

for (let i = 0; i < numeros.length; i++) {
    //console.log(i); //esto lo comento para que no se haga confuso.
    console.log(numeros[i]); //acá llamamos al elemento dentro de la variable, deacuerdo a su hubicación.
}

































































