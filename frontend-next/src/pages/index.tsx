import { useState } from 'react';
import FormularioCliente from '../components/Formulario';
import VistaCotizacion from '../components/VistaCotizacion';

export default function Home() {
  const [cotizacion, setCotizacion] = useState<Cotizacion | null>(null);

  const handleDatosCliente = async (cliente: Cliente) => {
    const response = await fetch('/api/generar-cotizacion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente),
    });
    const data = await response.json();
    setCotizacion(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Generar Cotización</h1>
      {!cotizacion ? (
        <FormularioCliente onDatosCompletos={handleDatosCliente} />
      ) : (
        <VistaCotizacion cotizacion={cotizacion} />
      )}
    </div>
  );
}