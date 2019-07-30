const express = require('express');
const router = express.Router();
const userController = require('../src/app/api/controllers/users');
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
router.get('/:id', userController.getUserById);
module.exports = router;