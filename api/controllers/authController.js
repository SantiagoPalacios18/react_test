const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { User } = require("../models/userModel")
const { SECRET_KEY } = require("../middlewares/auth")
const SALT = 10

const login = async (req, res) => {
    try{
        const { email, cont } = req.body;
        if(!email || !cont){
            res.status(400).json({message: "Falta completar datos"})
        }

        const user = User.findOne({where: {email: email}})
        if(!user){
            res.status(404).json({message: "No existe un usuario registrado con este mail"})
        }

        const checkCont = bcrypt.compare(cont, user.cont)
        if(!checkCont){
            res.status(400).json({message: "La contraseña es incorrecta"})
        }

        const token = jwt.sign(
            {userId: user.id},
            SECRET_KEY,
            {expiresIn: "30d"}
        )

        res.status(200).json(token);
    }catch(error){
        res.status(500).json({message: "Hubo un error, intente nuevamente"})
    }
}

const register = async (req, res) => {
    const {username, user, email, cont} = req.body;
    if (!username || !user || !email || !cont){
        res.status(400).json({message: "Falta completar datos"})
    }

    hashedCont = bcrypt.hash(cont, SALT)

    try{
        const newUser = await User.create(username, user, email, cont)
        res.status(200).json({user: {newUser}})
    }catch(error){
        res.status(500).json({error})
    }
}

const me = async (req, res) => {
    const decoded = req.user
    try{
        const user = User.findByPk(decoded)
        if(!user) res.s

        res.status(200).json({user})

    }catch(error){
        if(error){
            res.status(500).json(error.response.data.error)
        }else{
            res.status(500).json("El servidor no responde, intente nuevamente")
        }
        
    }
}

module.exports = {
    login,
    register,
    me
}