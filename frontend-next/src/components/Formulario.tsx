import { useState } from 'react';

interface FormularioClienteProps {
  onDatosCompletos: (cliente: Cliente) => void;
}

export default function FormularioCliente({ onDatosCompletos }: FormularioClienteProps) {
  const [cliente, setCliente] = useState<Cliente>({
    nombre: '',
    rut: '',
    telefono: '',
    email: '',
  });

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
    onDatosCompletos(cliente);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Campos del formulario */}
    </form>
  );
}