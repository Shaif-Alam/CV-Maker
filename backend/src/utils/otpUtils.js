const crypto = require('crypto');
const prisma = require('../config/prisma');

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const saveOTP = async (identifier, token) => {
    const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    await prisma.verificationToken.create({
        data: {
            identifier,
            token,
            expires,
        },
    });
};

const verifyOTP = async (identifier, token) => {
    const record = await prisma.verificationToken.findFirst({
        where: {
            identifier,
            token,
            expires: { gt: new Date() },
        },
    });

    if (record) {
        await prisma.verificationToken.delete({ where: { id: record.id } });
        return true;
    }
    return false;
};

module.exports = { generateOTP, saveOTP, verifyOTP };
