interface MetodoPago {
    valorLista: number;
    descuento: number;
    precio: number;
    pie: number;
    cuotas: number;
    beneficios?: string;
  }
  
  interface Cliente {
    nombre: string;
    rut: string;
    telefono: string;
    email: string;
  }
  
  interface Transaccion {
    id: string;
    descripcion: string;
    cantidad: number;
    precioUnitarioUF: number;
    totalUF: number;
  }
  
  interface Cotizacion {
    metadata: {
      n_cotizacion: string;
      fecha_emision: string;
      estado: string;
      validez: number;
    };
    cliente: Cliente;
    metodoPago: MetodoPago;
    transacciones: Transaccion[];
    calculos: {
      subtotalUF: number;
      impuestosUF: number;
      descuentosUF: number;
      totalUF: number;
      tipoCambioUF: number;
      totalCLP: number;
    };
  }