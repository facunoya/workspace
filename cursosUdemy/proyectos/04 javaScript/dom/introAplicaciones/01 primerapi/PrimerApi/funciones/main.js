const todos = [];//creamos arreglo vacio para guardar los datos ingresados
const form = document.getElementById('todo-form');//Acá traemos el form del html.
form.onsubmit = (e) => { //Acá declaramos como actua el submit, creado en el html.
    e.preventDefault(); //IMPORTANTE: Esto previene que la página se refresque.
    const todo = document.getElementById('todo');
    const todoText = todo.value;//podemos usar el 'value' que le dimos en el html.
    todo.value = '';//Esto hace el efecto de que el campo de borra.
    todos.push(todoText);//mandamos los datos ingresados al arreglo vacio.
    const todoList = document.getElementById('todo-list');//Acá traemos la ul del html.
    const todosTemplate = todos.map(t => '<li>'  + t + '</li>');//trae los elementos que voy mandando a arreglo 'todos'.
    todoList.innerHTML = todosTemplate.join('');//'.join'es lo que hace que el elemento se vea, BUSCAR mas info.
    }



// ----- '.map' una manera simplificada que hace lo mismo que el 'for' del index de la
//carpeta anterior a esta.



        //                    .MAP                ///



            ///GUARDAR DATOS HTML Y JS EN UN ARREGLO VACIO///







///     .splice

// sirve para sacar elemento de nuestros arreglos, tiene 2 parametros 
//el primero indica su orden de arr, el segundo cuantos quiero sacar.

const arr = [1,2,3,4];
//arr.splice(1, 2);
console.log(arr);













































