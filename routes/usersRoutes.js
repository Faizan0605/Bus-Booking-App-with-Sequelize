const express = require('express');
const usersController = require('../controller/usersController');

const router = express.Router();


router.post('/', usersController.createUser);
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUsersById);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);


module.exports = router;