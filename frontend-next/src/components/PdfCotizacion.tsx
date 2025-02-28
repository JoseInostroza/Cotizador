import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

interface PDFCotizacionProps {
  cotizacion: Cotizacion;
}

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default function PDFCotizacion({ cotizacion }: PDFCotizacionProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Cotización N° {cotizacion.metadata.n_cotizacion}</Text>
          <Text>Fecha: {cotizacion.metadata.fecha_emision}</Text>
        </View>
        {/* Más detalles de la cotización */}
      </Page>
    </Document>
  );
}