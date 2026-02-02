const express = require('express');
const prisma = require('../config/prisma');
const { generatePDF } = require('../utils/pdfService');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/download/:cvId', authMiddleware, async (req, res) => {
  try {
    const { cvId } = req.params;
    const cv = await prisma.cV.findUnique({
      where: { id: cvId, userId: req.user.userId }
    });

    if (!cv) return res.status(404).json({ message: 'CV not found' });
    if (cv.isLocked) return res.status(403).json({ message: 'Purchase required to download' });

    // Simple HTML wrapper for the CV content
    const html = `
      <html>
        <head><style>body { font-family: sans-serif; }</style></head>
        <body>
          <h1>${cv.data.personal?.fullName}</h1>
          <p>${cv.data.personal?.jobTitle}</p>
          <hr/>
          <div>${JSON.stringify(cv.data)}</div>
        </body>
      </html>
    `;

    const pdfBuffer = await generatePDF(html);
    res.set({ 'Content-Type': 'application/pdf', 'Content-Disposition': 'attachment; filename=cv.pdf' });
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
