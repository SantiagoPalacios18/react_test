//tokenController
const { Token } = require('../models/index.js');

const getTokens = async (req, res) => {
    try {
        const tokens = await Token.findAll();
        res.status(200).json(tokens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTokenById = async (req, res) => {
    try {
        const { token } = req.params;
        const foundToken = await Token.findByPk(token);
        if (!foundToken) return res.status(404).json({ message: "Token no encontrado" });

        res.status(200).json(foundToken);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createToken = async (req, res) => {
    try {
        const { token, user_id } = req.body;
        if (!token || !user_id) return res.status(400).json({ message: "token y user_id son obligatorios" });

        const newToken = await Token.create({ token, user_id });
        res.status(201).json(newToken);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateToken = async (req, res) => {
    try {
        const { token } = req.params;
        const { user_id } = req.body;

        const foundToken = await Token.findByPk(token);
        if (!foundToken) return res.status(404).json({ message: "Token no encontrado" });

        await foundToken.update({ user_id });
        res.status(200).json(foundToken);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteToken = async (req, res) => {
    try {
        const { token } = req.params;
        const foundToken = await Token.findByPk(token);
        if (!foundToken) return res.status(404).json({ message: "Token no encontrado" });

        await foundToken.destroy();
        res.status(200).json({ message: "Token eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getTokens,
    getTokenById,
    createToken,
    updateToken,
    deleteToken
};