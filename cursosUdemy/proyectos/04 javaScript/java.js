const array = [1, 2, "hola", "mundo"];
console.log(array);


//Agregar y quitar obejtos ".push" y ".pop"

array.push("elemento agregado");
console.log(array);

array.pop();
console.log(array);

//con length cuenta el número de elementos.
console.log(array.length);

const suma = 1 + 3;
const restar = 3 - 2;
const multiplicar = 3 * 2;
const dividir = 5 / 2;
const modulo = 10 % 3;
//modulo (%) nos devuelve el resto de la división.
console.log("Los siguientes son resultados de: suma, resta, multiplicación y división");
console.log(suma, restar, multiplicar, dividir, modulo);


//let, const y var son diferentes tipos de variables.
let num = 5;
num++;
console.log(num);
num++;
num++;
console.log(num);
num--;
console.log(num);
num += 3;
console.log(num);
console.log(num/3);



//Operadores de comparación

const resultado1 = 5 === 6;
const resultado2 = 5 == 6;
const resultado3 = 5 === "5";
const resultado4 = 5 == "5";
const resultado5 = 5 === 5;
const resultado6 = 5 == 5;



 console.log(resultado1, resultado2, resultado3, resultado4, resultado5, resultado6);


const res1 = 7 < 9;
const res2 = 7 > 9;
const res3 = 7 <= 9;
const res4 = 7 >= 9;
const res5 = 7 <= 7;
const res6 = 7 >= 6;
const res7 = 7 < 7;

console.log(res1, res2, res3, res4, res5, res6, res7);


const res8 = 7 !== 6;
const res9 = 7 !== "7";
const res10 = 7 != 7;
const res11 = 7 != "7";
const res12 = 7 + 7;
const res13 = 7 - 7;
const res14 = 7 !== 7;

console.log(res8, res9, res10, res11, res12, res13, res14);


//Operadores lógicos

//or ||, and && y not !
 
console.log("operadores lógicos || , && , !")

// or ||

console.log("or ||");
//regla
const or1 = false || false; //false
const or2 = false || true; //true 
const or3 = true || false; //true
const or4 = true || true; //true

//ampliacion
const or5 = true || true || true || true  || true || true;
const or6 = true || true || true || true || true || true || false;
const or7 = false || false || false || false;
const or8 = false || false || false || true;

console.log(or1, or2, or3, or4);
console.log(or5, or6, or7, or8);

console.log("and &&");

//regla
const and1 = true && true; //true
const and2 = true && false; //false
const and3 = false && false; //false
const and4 = false && true; //false

//ampliación
const and5 = true && true && true;
const and6 = true && true && false;
const and7 = true && false && false;
const and8 = false && false && true;
const and9 = false && false && true;
const and10 = false && true && true;

console.log(and1, and2, and3, and4);
console.log(and5, and6, and7, and8, and9, and10);


console.log("not !")

const not1 = !true;
const not2 = !false;


console.log(not1, not2);









