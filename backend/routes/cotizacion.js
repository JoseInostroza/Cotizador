const express = require('express');
const { getUFValue } = require('../services/ufService');
const { PDFDocument } = require('pdf-lib');
const router = express.Router();

router.post('/generar-cotizacion', async (req, res) => {
    const { tipoLand, formaPago } = req.body;

    // Obtener el valor de la UF
    const ufValue = await getUFValue();
    if (!ufValue) {
        return res.status(500).send('Error al obtener el valor de la UF');
    }

    // Lógica para generar el PDF basado en el tipo de LAND y la forma de pago
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    // Aquí puedes agregar el contenido del PDF basado en los datos de la hoja de financiamiento
    page.drawText(`Cotización para ${tipoLand}`, { x: 50, y: 750, size: 24 });
    page.drawText(`Forma de pago: ${formaPago}`, { x: 50, y: 700, size: 18 });
    page.drawText(`Valor de la UF: $${ufValue}`, { x: 50, y: 650, size: 18 });

    // Guardar el PDF
    const pdfBytes = await pdfDoc.save();
    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdfBytes);
});

module.exports = router;