const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const prisma = require('./config/prisma');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const cvRoutes = require('./routes/cvRoutes');
const configRoutes = require('./routes/configRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const pdfRoutes = require('./routes/pdfRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/cv', cvRoutes);
app.use('/api/config', configRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/pdf', pdfRoutes);

// Routes Placeholder
app.get('/', (req, res) => {
    res.send('CV Maker API is running...');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, prisma };
