const mongoose = require('mongoose')

const Users = mongoose.model('User', {
    name: { type: String, required: true, minLength: 3 },
    lastname: { type: String, required: true, minLength: 3 },
})

module.exports = Users




//En este User.js creo el modelo de Usurario y lo exporto, para ser utilizado
//en user.controller.js







