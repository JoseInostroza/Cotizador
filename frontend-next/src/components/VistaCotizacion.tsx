import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFCotizacion from './PdfCotizacion';

interface VistaCotizacionProps {
  cotizacion: Cotizacion;
}

export default function VistaCotizacion({ cotizacion }: VistaCotizacionProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Detalle de Cotización</h2>
      {/* Mostrar detalles de la cotización */}
      
      <PDFDownloadLink
        document={<PDFCotizacion cotizacion={cotizacion} />}
        fileName={`cotizacion-${cotizacion.metadata.n_cotizacion}.pdf`}
      >
        {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
      </PDFDownloadLink>
    </div>
  );
}