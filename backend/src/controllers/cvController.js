const prisma = require('../config/prisma');

const getCVs = async (req, res) => {
    try {
        const cvs = await prisma.cV.findMany({ where: { userId: req.user.userId } });
        res.json(cvs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createOrUpdateCV = async (req, res) => {
    try {
        const { id, title, data, templateId } = req.body;
        const userId = req.user.userId;

        if (id) {
            const cv = await prisma.cV.update({
                where: { id, userId },
                data: { title, data, templateId },
            });
            return res.json(cv);
        }

        const cv = await prisma.cV.create({
            data: {
                userId,
                title: title || 'My CV',
                data,
                templateId,
            },
        });
        res.status(201).json(cv);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCVById = async (req, res) => {
    try {
        const cv = await prisma.cV.findUnique({
            where: { id: req.params.id, userId: req.user.userId },
        });
        if (!cv) return res.status(404).json({ message: 'CV not found' });
        res.json(cv);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getCVs, createOrUpdateCV, getCVById };
