const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getMe);
router.post('/send-otp', (req, res) => res.json({ message: 'OTP sent (stub)' }));
router.post('/verify-otp', (req, res) => res.json({ message: 'OTP verified (stub)' }));

module.exports = router;
