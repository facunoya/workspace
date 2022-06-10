const express = require('express');
const mongoose = require('mongoose');
const user = require('./user.controller');
const app = express();
const port = 3000;

app.use(express.json())

mongoose.connect('mongodb+srv://simonela:hay123@cluster0.ulimw.mongodb.net/miapp?retryWrites=true&w=majority');

app.get('/', user.list)
app.post('/', user.create)
app.get('/:id',user.get)  
app.put('/:id', user.update);
app.patch('/:id', user.update)
app.delete('/:id', user.destroy)


app.get('*', (req, res) => { //esta funcion va siempre ultima porque es para las paginas,
    //que no esten declaradas. IMPORTANTE, lo que llama a todas las funciones no declaradas de get es ('*')
    res.status(404).send('esta página no existe fanku!')
})
app.post('*', (req, res) => { // esta función se hace en POST y GET asi nos muestra 
    //la pagina de error, customizada por nosotros.
    res.status(404).send('esta página no existe fanku!')
})
app.listen(port, () => {
    console.log('Arrancando la aplicación');
    });
