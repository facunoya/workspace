//Funciones


//funcion iterar

console.log('esta es la funcion iterar');

function iterar(arg1) {
        for (let i = 0; i < arg1.length; i++) {
        console.log(arg1[i]);
}
}
const numeros = [1, 2, "Hola", 4, 5];
const nombres = ["Pedro", "Juan", "Felipe", "Chanchito feliz", "Chanchito triste"];

iterar(nombres);
iterar(numeros);





//funcion suma

console.log('esta es la funcion suma');

function suma(a, b) {
    return a + b;  //Ver: entender bien la fiderencia, entre este return y posible conle.log que podría haver ido.
// creo que la diferencia es que, return muestra y almacena un resultado y console.log muestra pero no lo guarda
}

const resultadoSuma1 = suma(1, 2);
const resultadoSuma2 = suma(5, 6);
const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2);
console.log('El resultado es:', resultadoSuma3);








//callback, es una función que se va a implementar, al final de una función.

console.log('callback');


function sumar(a, b, cb) {
    const r = a + b;
    cb(r);
}
function callback(res) {
    console.log('el resultado es:', res);
}

sumar(3, 5, callback);


// funciones anonimas, son funciones NO reutilizables. 
//usando sumar de arriba

sumar (112 , 3, function(lo){console.log('hola soy una función anonima y mi resultado es:', lo)})







// fat arrow functions
// es una funcion que no lleva function se declara en la constante.

const miFatArrowFunction = (a , b) => a + b;
const otraFAF = (a, b) => {
    return a + b;
}
const r = miFatArrowFunction(7, 11);
console.log(r);

const r2 = otraFAF(5, 2);
console.log(r2);




































