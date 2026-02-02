const express = require('express');
const { createPurchase } = require('../controllers/paymentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.post('/purchase', createPurchase);

module.exports = router;
