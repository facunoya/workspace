const express = require('express');// el primer express es la asignación del framework,
//require : importa las dependencias, el segundo express es el nombre de la dependencia.
const app = express();//acá ejecutamos la función express.
const port = 3000;// indica en que puerto queremos que se ejecute, el nombre lo elegimos nosotros.

app.get('/', (req, res) => {
    res.status(200).send('chanchito feliz'); // status 200 = está ok, devuelve datos
    });//indica la ruta del navegador.
app.post('/', (req, res) => {
    res.status(201).send('creando chanchito');
    });
app.get('/:id', (req, res) => {
    console.log(req.params);//req solo envía muchos datos, con .param envia sólo el id
    res.status(200).send(req.params);
    });    
app.put('/:id', (req, res) => {
    console.log(req.params);//req solo envía muchos datos, con .param envia sólo el id
    res.sendStatus(204);
    });
app.patch('/:id', (req, res) => {
    res.sendStatus(204);
    });
app.delete('/:id', (req, res) => {
    res.sendStatus(204);
    });


app.listen(port, () => { // app.listen: ejecuta la aplicación
    // le pasamos el puerto y una función.
    console.log('Arrancando la aplicación');
    });



// para todo esto usar postman(get, put, post, delete, etc), gitbash(node lalala.js) y localhost:3000/(en el navegador web)
// usar los 3 juntos y ver que es lo que va pasando











































































