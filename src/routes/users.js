'use strict';
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users-controller');

// GET users listing
router.get('/', usersController.getUsers);

router.get('/id/:id', usersController.getUserById);

router.get('/name/:name', usersController.getUserByName);

module.exports = router;
