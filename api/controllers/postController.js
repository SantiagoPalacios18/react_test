//postController
const { Post } = require('../models/index.js');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        if (!post) return res.status(404).json({ message: "Post no encontrado" });

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, content, user_id } = req.body;
        if (!title || !content || !user_id) return res.status(400).json({ message: "title, content y user_id son obligatorios" });

        const newPost = await Post.create({ title, content, user_id });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, user_id } = req.body;

        const post = await Post.findByPk(id);
        if (!post) return res.status(404).json({ message: "Post no encontrado" });

        await post.update({ title, content, user_id });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        if (!post) return res.status(404).json({ message: "Post no encontrado" });

        await post.destroy();
        res.status(200).json({ message: "Post eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};