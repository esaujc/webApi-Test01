'use strict';
const express = require('express');
const router = express.Router();
const axios = require('axios');

const middlewares = require('../middlewares/middlewares');


/* GET home page. */
router.get('/', middlewares.alreadyLoggedIn, function(req, res, next) {
  res.render('index', { title: 'Web Api Test 01 - Login' });
});

router.get('/private', middlewares.isLoggedIn, function(req, res, next) {
  res.render('private', { title: 'Web Api Test 01 - Private' });
});


router.post('/',  async (req, res, next) => {
  const userId = req.body.id;
  await axios.get('http://www.mocky.io/v2/5808862710000087232b75ac')
  .then(response => {
      const result = response.data.clients.filter(user => user.id == userId)
      if (result[0]){
          req.session.currentUser = userId;
          req.session.role = result[0].role;
          req.session.name = result[0].name;
          res.status(200);
          // res.send(result[0])
          // res.redirect('/private')
          res.render('private', {user: userId, name: result[0].name, role: result[0].role})
      }else{
          res.status(404);
          res.redirect('/');
          // res.send('User not found');
      }
  })
  .catch(error => {
      res.status(500);
      res.send(error);
  });
})

module.exports = router;
