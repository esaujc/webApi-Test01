'use strict';

function isLoggedIn (req, res, next) {
    if (!req.session.currentUser) {
    //   res.status(403).send('error', 'You should log in first.');
      return res.redirect('/');
    } else {
      next();
    }
  };

  function isLoggedInNotAdmin (req, res, next) {
    if (req.session.role !== 'admin') {
      return res.redirect('/private');
    } else {
      next();
    }
  };

  function alreadyLoggedIn (req, res, next) {
    if (req.session.currentUser) {
      return res.redirect('/private');
    } else {
      next();
    }
  };

  module.exports = {
    isLoggedIn,
    isLoggedInNotAdmin,
    alreadyLoggedIn
  }