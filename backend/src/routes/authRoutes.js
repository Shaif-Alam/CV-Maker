const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/send-otp', (req, res) => res.json({ message: 'OTP sent (stub)' }));
router.post('/verify-otp', (req, res) => res.json({ message: 'OTP verified (stub)' }));

module.exports = router;
