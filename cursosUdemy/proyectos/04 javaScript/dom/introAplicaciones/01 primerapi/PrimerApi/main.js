const todos = [];//creamos arreglo vacio para guardar los datos ingresados
const form = document.getElementById('todo-form');
form.onsubmit = (e) => { //Acá declaramos como actua el submit, creado en el html.
    e.preventDefault(); //IMPORTANTE: Esto previene que la página se refresque.
    const todo = document.getElementById('todo');
    const todoText = todo.value;//podemos usar el 'value' que le dimos en el html.
    todo.value = '';//Esto hace el efecto de que el campo de borra.
    const todoList = document.getElementById('todo-list');//Acá traemos la ul del html.
    todos.push(todoText);//mandamos los datos ingresados al arreglo vacio.
    //console.log(todoText);
    todoList.innerHTML = " ";// esto es para que no se repitan los <li>, probar desactivarlo.
    for(let i = 0; i < todos.length; i++) {
        todoList.innerHTML += '<li>' + todos[i] + '</li>';
    
    
    }

}
//Probar estos 3:
//const todoList = document.getElementById('todo-list');
//const todosTemplate = todos.map(t => '<li>' + t + '</li>');
//todoList.innerHTML = todosTemplate.join('');













