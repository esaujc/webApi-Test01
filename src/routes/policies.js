'use strict';
const express = require('express');
const router = express.Router();

const policiesController = require('../controllers/policies-controller');

// GET policies listing
router.get('/', policiesController.getPolicies);

router.get('/client/:clientId', policiesController.getPolicyByClientId);

router.get('/id/:id', policiesController.getPolicyById);

module.exports = router;
