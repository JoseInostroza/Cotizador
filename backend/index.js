const express = require('express');
const cors = require('cors');
const cotizacionRouter = require('./routes/cotizacion');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', cotizacionRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});