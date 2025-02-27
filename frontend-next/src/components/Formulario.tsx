import { useState } from 'react';
import SeleccionMetodoPago from './SeleccionMetodoPago';

interface FormularioClienteProps {
  onDatosCompletos: (cliente: Cliente, metodoPago: MetodoPago) => void;
}

export default function FormularioCliente({ onDatosCompletos }: FormularioClienteProps) {
  const [cliente, setCliente] = useState<Cliente>({
    nombre: '',
    rut: '',
    telefono: '',
    email: '',
  });
  const [metodoPago, setMetodoPago] = useState<MetodoPago>();

  const validarRUT = (rut: string): boolean => {
    // Implementar validación de RUT chileno
    return /^0*(\d{1,3}(\.?\d{3})*)-([\dkK])$/.test(rut);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validarRUT(cliente.rut)) {
      alert('RUT inválido');
      return;
    }
    if (!metodoPago) {
      alert('Selecciona un método de pago');
      return;
    }
    onDatosCompletos(cliente, metodoPago);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Campos del formulario */}
      <SeleccionMetodoPago onSeleccion={setMetodoPago} />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Generar Cotización
      </button>
    </form>
  );
}