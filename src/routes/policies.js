'use strict';
const express = require('express');
const router = express.Router();
const middlewares = require('../middlewares/middlewares');

const policiesController = require('../controllers/policies-controller');

// GET policies listing
router.get('/',middlewares.isLoggedIn,middlewares.isLoggedInNotAdmin, policiesController.getPolicies);

// GET all the policies associated with the clientId
router.get('/client/:clientId',middlewares.isLoggedIn, middlewares.isLoggedInNotAdmin, policiesController.getPolicyByClientId);

// GET data from a policy ID
router.get('/policy/:id',middlewares.isLoggedIn, middlewares.isLoggedInNotAdmin, policiesController.getPolicyById);

module.exports = router;
