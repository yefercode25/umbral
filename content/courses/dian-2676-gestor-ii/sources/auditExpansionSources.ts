import type { SourceRef } from '../../../../src/types/course'

/**
 * Fuentes incorporadas en alpha.6 después de la auditoría de profundidad.
 * Se mantienen separadas para que el origen de la expansión sea trazable y
 * para facilitar una eventual revisión cuando la CNSC publique la GOA.
 */
export const dianAuditExpansionSources: SourceRef[] = [
  {
    id: 'fp-relacion-estado-ciudadanias',
    title: 'MIPG · Dimensión Relación Estado–Ciudadanías',
    publisher: 'Departamento Administrativo de la Función Pública',
    url: 'https://www.funcionpublica.gov.co/mipg/relacion-estado-ciudadanias',
    type: 'official',
    verifiedAt: '2026-09-13',
    note: 'Referencia vigente para servicio a las ciudadanías, accesibilidad, inclusión, escucha activa, transparencia, participación y mejora continua.'
  },
  {
    id: 'dian-pgd-2025',
    title: 'Programa de Gestión Documental – PGD · Versión 3 · 2025',
    publisher: 'DIAN · Subdirección Administrativa',
    url: 'https://www.dian.gov.co/atencionciudadano/Documents/7-1-5-Programa-de-Gestion-Documental-PGD.pdf',
    type: 'official',
    verifiedAt: '2026-09-13',
    note: 'Programa institucional adoptado en 2025 para administrar el ciclo de vida de los documentos y preservar trazabilidad, acceso y memoria institucional.'
  },
  {
    id: 'decreto-1080-2015-gestion-documental',
    title: 'Decreto 1080 de 2015 · Gestión documental · versión integrada',
    publisher: 'Departamento Administrativo de la Función Pública · Gestor Normativo',
    url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76833',
    type: 'official',
    verifiedAt: '2026-09-13',
    note: 'Decreto Único Reglamentario del Sector Cultura. Compila las reglas de gestión documental del Decreto 2609 de 2012, incluidos responsabilidad, instrumentos, procesos y ciclo de vida documental.'
  },
  {
    id: 'dian-transparencia-informacion',
    title: 'Transparencia y Acceso a la Información Pública',
    publisher: 'DIAN',
    url: 'https://www.dian.gov.co/atencionciudadano/Paginas/Transparencia.aspx',
    type: 'official',
    verifiedAt: '2026-09-13',
    note: 'Portal institucional de instrumentos de gestión de información, datos abiertos, trámites, participación y Programa de Gestión Documental.'
  },
  {
    id: 'res-248-2025-grandes-contribuyentes',
    title: 'Resolución DIAN 000248 de 2025 · Grandes Contribuyentes',
    publisher: 'DIAN · Normograma',
    url: 'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0248_2025.htm',
    type: 'official',
    verifiedAt: '2026-09-13',
    note: 'Resolución vigente para 2026 sobre calificación y retiro de Grandes Contribuyentes y efectos asociados, incluida la calidad de agente de retención de IVA en los términos allí previstos.'
  },
  {
    id: 'proc-auxiliares-justicia-0418',
    title: 'PR-COT-0418 · Designación, relevo y exclusión de Auxiliares de la Justicia',
    publisher: 'DIAN · Listado Maestro de Documentos',
    url: 'https://www.dian.gov.co/atencionciudadano/LMDP/Cumplimiento-Obligaciones-Tributarias/Administracion-de-Cartera/Procedimientos/PR-COT-0418.pdf',
    type: 'official',
    verifiedAt: '2026-09-13',
    note: 'Procedimiento institucional para la gestión de auxiliares de la justicia vinculados a actuaciones de cobro y ejecución.'
  },
  {
    id: 'proc-honorarios-auxiliares-0420',
    title: 'PR-COT-0420 · Reconocimiento de honorarios a los Auxiliares de la Justicia',
    publisher: 'DIAN · Listado Maestro de Documentos',
    url: 'https://www.dian.gov.co/atencionciudadano/LMDP/Cumplimiento-Obligaciones-Tributarias/Administracion-de-Cartera/Procedimientos/PR-COT-0420.pdf',
    type: 'official',
    verifiedAt: '2026-09-13',
    note: 'Procedimiento que conecta liquidación y pago de honorarios con la continuidad de la liquidación del crédito y las costas.'
  },
  {
    id: 'microsoft-outlook-email',
    title: 'Crear y enviar correo electrónico en Outlook',
    publisher: 'Microsoft Support',
    url: 'https://support.microsoft.com/es-es/office/crear-y-enviar-correo-electr%C3%B3nico-en-outlook-19c32deb-08b6-4f90-a211-02bc5f77f360',
    type: 'reference',
    verifiedAt: '2026-09-13',
    note: 'Referencia complementaria para Para, CC, CCO, asunto, cuerpo del mensaje y envío. No constituye temario oficial CNSC.'
  },
  {
    id: 'microsoft-outlook-attachments',
    title: 'Agregar imágenes o adjuntar archivos a correos electrónicos en Outlook',
    publisher: 'Microsoft Support',
    url: 'https://support.microsoft.com/es-es/outlook/mail/add-pictures-or-attach-files-to-emails-in-outlook',
    type: 'reference',
    verifiedAt: '2026-09-13',
    note: 'Referencia complementaria sobre adjuntos, vínculos de OneDrive y permisos de visualización/edición. No constituye temario oficial CNSC.'
  },
  {
    id: 'microsoft-excel-file-formats',
    title: 'Formatos de archivo que admite Excel',
    publisher: 'Microsoft Support',
    url: 'https://support.microsoft.com/es-es/excel/file-formats-that-are-supported-in-excel',
    type: 'reference',
    verifiedAt: '2026-09-13',
    note: 'Referencia complementaria sobre XLSX, XLSM, CSV, PDF y efectos de guardar en otros formatos. No constituye temario oficial CNSC.'
  },
  {
    id: 'microsoft-word-file-formats',
    title: 'Formatos de archivo para guardar documentos',
    publisher: 'Microsoft Support',
    url: 'https://support.microsoft.com/es-es/word/file-formats-for-saving-documents',
    type: 'reference',
    verifiedAt: '2026-09-13',
    note: 'Referencia complementaria sobre DOCX, PDF, RTF, texto y otros formatos de Word. No constituye temario oficial CNSC.'
  },
  {
    id: 'microsoft-office-file-formats',
    title: 'Más información sobre los formatos de archivo',
    publisher: 'Microsoft Support',
    url: 'https://support.microsoft.com/es-ES/Office/collab-files/learn-about-file-formats',
    type: 'reference',
    verifiedAt: '2026-09-13',
    note: 'Referencia transversal para comprender que el formato determina cómo se almacenan y transfieren datos y características entre aplicaciones.'
  }
]
