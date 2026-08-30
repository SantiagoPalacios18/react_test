//likeRoutes
const { Router } = require('express');
const { getLikes, getLikeById, createLike, updateLike, deleteLike, countLikesByPost } = require('../controllers/likeController');

const router = Router();

router.get('/', getLikes);
router.get('/count/:post_id', countLikesByPost);
router.get('/:id', getLikeById);
router.post('/', createLike);
router.put('/:id', updateLike);
router.delete('/:id', deleteLike);

module.exports = router;