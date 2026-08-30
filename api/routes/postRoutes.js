//postRoutes
const { Router } = require('express');
const { getPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/postController');

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;