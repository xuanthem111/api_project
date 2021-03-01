const Router = require('express').Router;
const User = require('../models/user');
const userControllers = require('../controllers/userControllers');
const authMiddleware = require('../middlewares/authJwt');
const userExist = require('../middlewares/userExist');
const validDateRegister = require('../middlewares/userFormValidate')

const router = Router();

// /api/users/ 
router.get('/', userControllers.getAllUsers)
// /api/users/:id
router.get('/:id', authMiddleware, userControllers.getUserById)

// /api/users/login
router.post('/login', userControllers.login)

// /api/users/register
router.post('/register', validDateRegister, userExist, userControllers.register)
// /api/users/:id

router.delete('/:id', authMiddleware, userControllers.deleteUser)

// /api/users/:id
router.put('/:id', authMiddleware, validDateRegister, userControllers.updateUser)

// /api/users/:id
router.get('/:id', authMiddleware, userControllers.getUserById)

module.exports = router;