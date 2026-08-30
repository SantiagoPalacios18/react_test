//tokenRoutes
const { Router } = require('express');
const { getTokens, getTokenById, createToken, updateToken, deleteToken } = require('../controllers/tokenController');

const router = Router();

router.get('/', getTokens);
router.get('/:token', getTokenById);
router.post('/', createToken);
router.put('/:token', updateToken);
router.delete('/:token', deleteToken);

module.exports = router;