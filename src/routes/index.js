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


router.post('/private',  async (req, res, next) => {
try{
    const userId = req.body.id;
    const response = await axios.get(process.env.URL)
        const result = response.data.clients.filter(user => user.id == userId)
        if (result[0]){
            req.session.currentUser = userId;
            req.session.role = result[0].role;
            req.session.name = result[0].name;
            res.status(200).render('private', {user: userId, name: result[0].name, role: result[0].role})
        }else{
            res.status(404).redirect('/');
        }
    }
    catch(error){
        res.status(500).send(error.message);
    }
})

module.exports = router;
