const express = require('express');
const { getCVs, createOrUpdateCV, getCVById } = require('../controllers/cvController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.get('/', getCVs);
router.post('/', createOrUpdateCV);
router.get('/:id', getCVById);

module.exports = router;
