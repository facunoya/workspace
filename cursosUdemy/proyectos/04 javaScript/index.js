//IMPORTANTE: Para ver esto, abrir gitbash y poner: node index.js
//clear: borra consola git.
console.log("Hola Mundo");
console.log("Amor")

// Tipos de datos en JS
//String: cadena de caracteres, ej:"Hola Mundo"
//Boolean: true false.
//Null: nulo
//Number: números.
//"123" es un string, es distinto a 123 que es un number.
//Undefined: algo que no se encuentra definido.
//Objects: obejetos.
//Variables: var, let o const


var miPrimeraVariables = "lala";
console.log(miPrimeraVariables);


let miPrimeraVariable = "Primer variable!";
console.log(miPrimeraVariable);

//mutabilidad
miPrimeraVariable = "Esto ha cambiado"
console.log(miPrimeraVariable);

//boolean

let miBoolean = true;
let miOtroBool = false;

let miNumero = 0;
let miNumero2 = 12;
let miNumero3 = -250;

console.log(miNumero, miNumero2, miNumero3, miBoolean, miPrimeraVariable );


//Objeto
//UN objeto es una agrupacion de datos, estos datos tienen sentido entre si

//objeto vacio:
const miPrimerObjeto = {};

//objeto
const miObjeto = {
    unNumero: 12 ,
    unString: "Esta cadena de caracteres" ,
    unaCondicion: true ,
};

console.log(miObjeto);
console.log(miObjeto.unNumero);
//console.log(miPrimerObjeto);
console.log(miObjeto, miPrimerObjeto);
//los objetos llevan {}, los arreglos []


const arrVacio = []
const arr  = [1, 2, 3, "hola"];

console.log(arrVacio, arr);

arrVacio.push(125);
arrVacio.push("genial!");

console.log(arrVacio);