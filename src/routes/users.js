'use strict';
const express = require('express');
const router = express.Router();
const middlewares = require('../middlewares/middlewares');

const usersController = require('../controllers/users-controller');

// GET users listing
router.get('/',middlewares.isLoggedIn, usersController.getUsers);

router.get('/id/:id', middlewares.isLoggedIn, usersController.getUserById);

router.get('/name/:name', middlewares.isLoggedIn, usersController.getUserByName);

// router.post('/', usersController.authentication);

module.exports = router;
