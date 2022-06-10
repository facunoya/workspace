const req = require("express/lib/request")

//REFACTORIZANDO
const User = {
    list: (req, res) => {
        res.status(202).send('Hola chanchito!')
    },
    get: (req, res) => {
        res.status(200).send('este es un chanchito')
    },
    create: (req, res) => {
        res.status(201).send('Creando chanchito')
    },
    update: (req, res) => {
        res.status(204).send('actualizando chanchito')
    },
    destroy: (req, res) => {
        res.status(204).send('eliminando chanchito')
    }
}

module.exports = User
