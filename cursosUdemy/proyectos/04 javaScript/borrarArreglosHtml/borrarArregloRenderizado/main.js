////            FUNCION RENDER                ////
    ///     ENTENDER DEFINICION DE RENDER   ///


const todos = [];//creamos arreglo vacio para guardar los datos ingresados
const render = () => { //aca creo la funcion render y la llamo dentro de ella misma y en la siguiente función.
    const todoList = document.getElementById('todo-list');//Acá traemos la ul del html.
    const todosTemplate = todos.map(t => '<li>'  + t + '</li>');//trae los elementos que voy mandando a arreglo 'todos'.
    todoList.innerHTML = todosTemplate.join('');//'.join'es lo que hace que el elemento se vea, BUSCAR mas info.
    const elementos = document.querySelectorAll('#todo-list li');//querySelectorAll nos va a permitir buscar elementos por id, class o etiquetas html.
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {//'addEventListener' escuchador de eventos, le indicamos que estamos escuchando el evento click!
            //es para que me tire los datos de elemento e indicie, sólo cuando haga click.
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1);//Acá le indico que BORRE el elemento al que le hago click del arreglo y el html.
            render();//importante se renderiza 2 veces BUSCAR enter bien el render.
            console.log(todos, i);
        })
    })
}


/// renderizamos la función porque en el ejercio anterior, no estaba renderizando los indices del elemento hmtl
// por este motivo no se terminaban de eliminar.
//con el render seria como q se actualiza antes de salir.


const form = document.getElementById('todo-form');//Acá traemos el form del html.
form.onsubmit = (e) => { //Acá declaramos como actua el submit, creado en el html.
    e.preventDefault(); //IMPORTANTE: Esto previene que la página se refresque.
    const todo = document.getElementById('todo');
    const todoText = todo.value;//podemos usar el 'value' que le dimos en el html.
    todo.value = '';//Esto hace el efecto de que el campo de borra.
    todos.push(todoText);//mandamos los datos ingresados al arreglo vacio.
    render(); //importante se renderiza 2 veces BUSCAR enter bien el render.

    }










































