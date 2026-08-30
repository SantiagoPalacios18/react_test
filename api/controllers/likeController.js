//likeController
const { Like } = require('../models/index.js');

const getLikes = async (req, res) => {
    try {
        const likes = await Like.findAll();
        res.status(200).json(likes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getLikeById = async (req, res) => {
    try {
        const { id } = req.params;
        const like = await Like.findByPk(id);
        if (!like) return res.status(404).json({ message: "Like no encontrado" });

        res.status(200).json(like);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createLike = async (req, res) => {
    try {
        const { user_id, post_id } = req.body;
        if (!user_id || !post_id) return res.status(400).json({ message: "user_id y post_id son obligatorios" });

        const newLike = await Like.create({ user_id, post_id });
        res.status(201).json(newLike);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateLike = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_id, post_id } = req.body;

        const like = await Like.findByPk(id);
        if (!like) return res.status(404).json({ message: "Like no encontrado" });

        await like.update({ user_id, post_id });
        res.status(200).json(like);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteLike = async (req, res) => {
    try {
        const { id } = req.params;
        const like = await Like.findByPk(id);
        if (!like) return res.status(404).json({ message: "Like no encontrado" });

        await like.destroy();
        res.status(200).json({ message: "Like eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const countLikesByPost = async (req, res) => {
    try {
        const { post_id } = req.params;
        const total = await Like.count({ where: { post_id } });
        res.status(200).json({ post_id, total });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getLikes,
    getLikeById,
    createLike,
    updateLike,
    deleteLike,
    countLikesByPost
};