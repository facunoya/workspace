const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://simonela:hay123@cluster0.ulimw.mongodb.net/miapp?retryWrites=true&w=majority')
const User = mongoose.model('User', {
    username: String,
    edad: Number,
})
const crear = async () => {
    const user = new User({ username: 'juan carlos', edad: 29})
    const savedUser = await user.save()
    console.log(savedUser)
}
//crear()

//Acá creamos un chanchito en la base de datos, accedemos a ella desde gitbash
//con el comando node index.js
const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

//buscarTodo()
const buscar = async () => {
    const user = await User.find({ username:'chanchito feliz' })
    console.log(user)
}

//buscar()

const buscarUno = async () => {
    const user = await User.findOne({ username: 'chanchito feliz'})
    console.log(user) 
}

//buscarUno()

const actualizar = async () => {
    const user = await User.findOne({ username: 'chanchito feliz'})
    user.edad = 51
    await user.save()
    console.log(user)
}

//actualizar()


const eliminar = async () => {
    const user = await User.findOne({ username: 'juan carlos'})
    console.log(user)
    if (user) {
        await user.remove()
    }
}

//eliminar()



