import { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { cliente, metodoPago } = req.body;

  // Generar número secuencial y fecha
  const n_cotizacion = generarNumeroSecuencial();
  const fecha_emision = dayjs().tz('America/Santiago').format('YYYY-MM-DD HH:mm:ss Z');

  // Calcular valores
  const tipoCambioUF = await obtenerValorUF();
  const totalUF = metodoPago.precio;
  const totalCLP = totalUF * tipoCambioUF;

  const cotizacion: Cotizacion = {
    metadata: { n_cotizacion, fecha_emision, estado: 'pendiente', validez: 7 },
    cliente,
    metodoPago,
    transacciones: [], // Aquí puedes agregar transacciones específicas
    calculos: {
      subtotalUF: totalUF,
      impuestosUF: totalUF * 0.19,
      descuentosUF: 0,
      totalUF: totalUF * 1.19,
      tipoCambioUF,
      totalCLP: totalUF * 1.19 * tipoCambioUF,
    },
  };

  res.status(200).json(cotizacion);
}