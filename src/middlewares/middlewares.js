'use strict';

function isLoggedIn (req, res, next) {
    if (!req.session.currentUser) {
    //   res.status(403).send('error', 'You should log in first.');
    
      return res.redirect('/');
    } else {
      next();
    }
  };

  module.exports = {
    isLoggedIn
  }