import type { SourceRef } from '../../../../src/types/course'

/** Fuentes oficiales con versión y fecha identificables: corte GOA 19-06-2026. */
export const dianAppliedPublicServiceSources: SourceRef[] = [
  {
    id:'agn-acuerdo-001-2024', title:'Acuerdo Único de la Función Archivística · Acuerdo AGN 001 de 2024',
    publisher:'Archivo General de la Nación', url:'https://normativa.archivogeneral.gov.co/acuerdo-no-001-del-2024/',
    type:'official',verifiedAt:'2026-10-12',note:'Criterios técnicos y jurídicos de función archivística; versión anterior al corte de la GOA.'
  },
  {
    id:'mipg-manual-6-1-2026',title:'Manual Operativo MIPG versión 6.1 · febrero de 2026 · siete dimensiones',
    publisher:'Departamento Administrativo de la Función Pública',url:'https://www1.funcionpublica.gov.co/documents/28587410/57410531/2026-02-10_Documento_manual_operativo_mdi_v6.1.pdf/d2da8a29-de05-ebfb-7894-fb9bdc936bb0',
    type:'official',verifiedAt:'2026-10-12',note:'Versión existente antes del corte normativo GOA (19/06/2026), 7 dimensiones. Ver también archivo oficial en biblioteca MIPG.'
  },
  {
    id:'mipg-manual-v7-2026',title:'Manual Operativo MIPG versión 7 · 2026 · reorganización a seis dimensiones',
    publisher:'Departamento Administrativo de la Función Pública',url:'https://www.funcionpublica.gov.co/modelo-integrado-de-planeacion-y-gestion',
    type:'official',verifiedAt:'2026-10-12',note:'Versión posterior a junio de 2026: referencia contextual para distinguirla del contenido evaluable según GOA, NO proyectarla retrospectivamente.'
  },
  {
    id:'codigo-buen-gobierno-dian-v13',title:'Código de Buen Gobierno DIAN · CG-PEC-0001 · versión 13',
    publisher:'DIAN',url:'https://www.dian.gov.co/dian/entidad/MisionVision/Codigo-de-Buen-Gobierno-DIAN.pdf',
    type:'official',verifiedAt:'2026-10-12',note:'Políticas de buen gobierno, rendición de cuentas, seguridad y privacidad institucional; distinto del Código de Integridad.'
  },
]
