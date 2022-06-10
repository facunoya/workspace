const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://simonela:hay123@cluster0.ulimw.mongodb.net/miapp?retryWrites=true&w=majority')
const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({username: 'chanchito javier', edad: 25 })
    const savedUser = await user.save() 
    console.log(savedUser)
}

//crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}
//buscarTodo()

const buscar = async () => {
    const users = await User.find({ username: 'chanchito feliz' })
    console.log(users)
}

//buscar()

const buscarUno = async () => {
    const users = await User.findOne({ username: 'chanchito feliz' })
    console.log(users)    
}

//buscarUno()

const actualizar = async () => {
    const users = await User.findOne({ username: 'chanchito feliz' })
    users.edad = 35
    await users.save()
    console.log(users)
}

//actualizar()

const eliminar = async () => {
    const users = await User.findOne({username: 'chanchito javier'})
    if (users) {
        await users.remove()
    }
    console.log(users)
}

eliminar()

