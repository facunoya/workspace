const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://simonela:hay123@cluster0.ulimw.mongodb.net/miapp1?retryWrites=true&w=majority');

const User = mongoose.model('User', {
    username: String,
    edad: Number,
});






const crear = async () => {
    const user = new User({username: 'chanchito felipe', edad: 23})
    const savedUser = await user.save();
    console.log(savedUser);

}

//crear();



const buscarTodo = async () => {
    const user = await User.find()
    console.log(user)
}
 
buscarTodo();





const buscar = async () => {
    const user = await User.find({ username:'chanchito feliz'})
    console.log(user)
}

//buscar();





const buscarUno = async () => {
    const user = await User.findOne({ username: 'chanchito feliz'})
    console.log(user)
}

//buscarUno();





const actualizar = async () => {
    const user = await User.findOne({ username: 'chanchito feliz'})
    console.log(user)
    user.edad = 25
    await user.save()
}

//actualizar();





const eliminar = async () => {
    const user = await User.findOne({ username: 'chanchito triste'})
    console.log(user)
    if (user) {
        await user.remove()
    }
}

//eliminar()






























