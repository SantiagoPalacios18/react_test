const{ Router } = require('express');
const { login, register, me } = require("../controllers/authController");
const { authMiddleware } = require('../middlewares/auth');
const router = Router();

router.post('/login', login);
router.get('/me:token', authMiddleware, me);
router.post('/register', register);

module.exports = router;