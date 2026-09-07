const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { User } = require("../models/userModel")
const { SECRET_KEY } = require("../middlewares/auth")

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

    
}