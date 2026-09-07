//userRoutes
const { Router } = require('express');
const { getUsers, getUserById, getUserRepeated, createUser, updateUser, deleteUser } = require('../controllers/userController');

const router = Router();

router.get('/', getUsers);
router.get('/check', getUserRepeated)
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;