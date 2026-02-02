const express = require('express');
const router = express.Router();
const cvFields = require('../config/cvFields.json');
const templates = require('../config/templates.json');

router.get('/fields', (req, res) => res.json(cvFields));
router.get('/templates', (req, res) => res.json(templates));

module.exports = router;
