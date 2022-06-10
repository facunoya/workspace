const req = require("express/lib/request")
const Users = require('./User')


//REFACTORIZANDO
const User = {
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users)
    },
    get: async (req, res) => {
        res.status(200).send('este es un chanchito')
    },
    create: async (req, res) => {
        console.log(req.body)//Esto lo llamo con un middelway, desde el apirefactorizada.js
        res.status(201).send('Creando chanchito')
    },
    update: async (req, res) => {
        res.status(204).send('actualizando chanchito')
    },
    destroy: async (req, res) => {
        res.status(204).send('eliminando chanchito')
    }
}

module.exports = User
