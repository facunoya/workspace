
console.log ('Hola mundo!')
//Propiedad 
    //'.innerText':
        // Hace referencia, al texto de la etiqueta HTML.  
const primer = document.getElementById('primerP');
console.log(primer);//Acá imprimo la línea completa del html, en la consola!
console.log(primer.innerText);//Acá imprimo el párrafo del html en la consola.
//primer.innerText = 'texto actualizado desde javaScript'//Acá cambio el contenido del párrafo.
//primer.innerText = '<li>elemento 1</li><li>elemento 2</li>';
//Propiedad
    //'innerHTML' :
        // permite cambiar la etiqueta HTML.
            //A continuación, cambiaremos el <p> del HTML por 2 <li>:  
primer.innerHTML = '<li>elemento 1</li><li>elemento 2</li>';





























































































