'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web Api Test 01 - Login' });
});

router.get('/private', function(req, res, next) {
  res.render('private', { title: 'Web Api Test 01 - Private' });
});

module.exports = router;
