import { useState } from 'react';
import metodosPago from '../data/metodos-pagos.json';

interface SeleccionMetodoPagoProps {
  onSeleccion: (metodo: MetodoPago) => void;
}

export default function SeleccionMetodoPago({ onSeleccion }: SeleccionMetodoPagoProps) {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState<string>('LAND VIP 1');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const metodo = e.target.value;
    setMetodoSeleccionado(metodo);
    onSeleccion(metodosPago[metodo as keyof typeof metodosPago]);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Método de Pago</label>
      <select
        value={metodoSeleccionado}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        {Object.keys(metodosPago).map((metodo) => (
          <option key={metodo} value={metodo}>
            {metodo}
          </option>
        ))}
      </select>
    </div>
  );
}