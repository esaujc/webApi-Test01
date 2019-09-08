'use strict';
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users-controller');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', usersController.getUsers);


module.exports = router;
