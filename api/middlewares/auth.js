const jwt = require("jsonwebtoken")

SECRET_KEY = "WDGASTERINDELTARUNEBUILDITALLFROMANEMPTYROOM";

const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"]

    if (!token) {
        return res.status(401).json({ message: "Token no proporcionado" })
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado" })
    }
}

module.exports = { authMiddleware, SECRET_KEY }