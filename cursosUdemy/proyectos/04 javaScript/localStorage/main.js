///      localStorage        ///
   //es para guardad datos incluso después de recargar o salir del explorador.

const todos = JSON.parse(localStorage.getItem('todos')) || [];
const render = () => { 
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => '<li>'  + t + '</li>');
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1);
            actualizaTodos(todos);
            render();
        })
    })
}
//IMPORTAMTE esta función, es para que se actualicen, los cambios de la página.//
//pero,'ATENTO' con el localStorage los cambios quedan siempre//
const actualizaTodos = (todos) => {//IMPORTANTE 1//
    const todoString = JSON.stringify(todos);//IMPORTANTE 2//
    localStorage.setItem('todos', todoString);//IMPORTANTE 3//
}

render() //este render es importante!
const form = document.getElementById('todo-form');
form.onsubmit = (e) => { 
    e.preventDefault(); 
    const todo = document.getElementById('todo');
    const todoText = todo.value;
    todo.value = '';
    todos.push(todoText);
    actualizaTodos(todos);
    render(); 
   }


   

   //va en consola del navegador//localStorage.setItem('lala', 'chanchito feliz');
   //va en consola del navegador//localStorage.getItem('lala');
   //va en consola del navegador//localStorage.setItem('lele', 'chanchito triste');

    //const todos = JSON.parse(localStorage.getItem('todos')) || [];




































































