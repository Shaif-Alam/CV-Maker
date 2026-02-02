const prisma = require('../config/prisma');

const createPurchase = async (req, res) => {
    try {
        const { templateId, transactionId, amount } = req.body;
        const userId = req.user.userId;

        const purchase = await prisma.purchase.create({
            data: {
                userId,
                templateId,
                transactionId,
                amount,
                status: 'COMPLETED'
            }
        });

        res.status(201).json(purchase);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createPurchase };
