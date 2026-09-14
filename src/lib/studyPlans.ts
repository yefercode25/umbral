import type { Course } from '../types/course'

export type StudyPhase = {
  id: string
  weeks: string
  title: string
  description: string
  moduleIds: string[]
  practice: string
}

const dianPhases: StudyPhase[] = [
  { id:'d1', weeks:'Semana 1', title:'Base jurídica e institucional', description:'Construye vocabulario, función pública, DIAN y procedimiento administrativo antes de entrar al núcleo tributario.', moduleIds:['m0','m1','m2','m3','m4'], practice:'Diagnóstico + preguntas de fundamentos al cerrar la semana.' },
  { id:'d2', weeks:'Semana 2', title:'Obligación, recaudo y control', description:'Conecta obligación tributaria, estado de cuenta, EAR y control extensivo antes de entrar a cartera.', moduleIds:['m5','m6','m7','m8'], practice:'Dos sesiones adaptativas centradas en estado de cuenta, EAR y control.' },
  { id:'d3', weeks:'Semanas 3–5', title:'Núcleo de cartera y cobro', description:'Dedica aquí la mayor parte del tiempo: exigibilidad, prescripción, persuasivo, coactivo, cautelares y concursales.', moduleIds:['m9','m10','m11','m12','m13','m14'], practice:'Casos PJS después de cada módulo + un simulacro rápido semanal.' },
  { id:'d4', weeks:'Semana 6', title:'Devoluciones, compensaciones y datos', description:'Domina el origen del saldo, la ruta de devolución y el papel de los sistemas y la trazabilidad.', moduleIds:['m15','m16','m17'], practice:'Sesión enfocada en clasificación de casos y verificación de expedientes.' },
  { id:'d5', weeks:'Semana 7', title:'Comportamientos e integridad', description:'Entiende conductas observables y responde con consistencia, sin buscar una personalidad artificial.', moduleIds:['m18','m19','m20'], practice:'Repaso de valores, dilemas y conductas observables.' },
  { id:'d6', weeks:'Semana 8', title:'Consolidación y examen', description:'Reduce lectura nueva y aumenta recuperación activa, errores, simulacros y revisión de fuentes.', moduleIds:['m21','m22','m23'], practice:'Simulacros, cuaderno de errores y repaso adaptativo de los módulos más débiles.' },
  { id:'d7', weeks:'En paralelo', title:'Herramientas y razonamiento transversal', description:'Ofimática, Excel, análisis de datos, lógica, conjuntos, matemática práctica y probabilidad como cobertura complementaria.', moduleIds:['m24','m25','m26','m27','m28'], practice:'Dos sesiones transversales por semana sin desplazar el núcleo funcional.' },
]

const pgnPhases: StudyPhase[] = [
  { id:'p1', weeks:'Semanas 1–2', title:'Alfabetización jurídica y mapa del Estado', description:'Empieza desde cero: empleo, concurso, vocabulario jurídico, Constitución, estructura estatal, función pública y territorio.', moduleIds:Array.from({length:10},(_,i)=>`pgn-m${i}`), practice:'Diagnóstico inicial + recuperación activa de conceptos básicos y competencia.' },
  { id:'p2', weeks:'Semana 3', title:'Procuraduría, competencia y proceso', description:'Ubica Ministerio Público, estructura PGN, funciones misionales, competencia y teoría general del proceso.', moduleIds:Array.from({length:10},(_,i)=>`pgn-m${10+i}`), practice:'Casos cortos de competencia, acto, petición, reserva y secuencia procesal.' },
  { id:'p3', weeks:'Semanas 4–5', title:'Derecho disciplinario sustancial', description:'Construye la lógica de principios, sujetos, falta disciplinaria, ilicitud sustancial, culpabilidad, deber funcional y sanciones.', moduleIds:Array.from({length:5},(_,i)=>`pgn-m${20+i}`), practice:'Preguntas situacionales diarias y un simulacro de núcleo al terminar la semana 5.' },
  { id:'p4', weeks:'Semanas 6–8', title:'Instrucción disciplinaria', description:'Aprende el expediente como secuencia: noticia, indagación, investigación, defensa, cierre, archivo/cargos, notificaciones, nulidades, comisiones y separación funcional.', moduleIds:Array.from({length:10},(_,i)=>`pgn-m${25+i}`), practice:'Laboratorios de expediente, ordenamiento de actuaciones y revisión de errores de etapa.' },
  { id:'p5', weeks:'Semanas 9–10', title:'Derecho probatorio y evidencia', description:'Domina carga, pertinencia, conducencia, utilidad, legalidad, contradicción, plan probatorio, sana crítica y medios de prueba.', moduleIds:Array.from({length:10},(_,i)=>`pgn-m${35+i}`), practice:'Matriz hecho → hipótesis → prueba → inferencia + simulacros centrados en evidencia.' },
  { id:'p6', weeks:'Semana 11', title:'Prevención, intervención y derechos', description:'Conecta función preventiva, riesgos, políticas públicas, intervención, derechos fundamentales y enfoque diferencial.', moduleIds:Array.from({length:5},(_,i)=>`pgn-m${45+i}`), practice:'Casos de riesgo preventivo, intervención y atención de población vulnerable.' },
  { id:'p7', weeks:'Semana 12', title:'Contratación y anticorrupción', description:'Estudia contratación desde planeación hasta ejecución, supervisión, conflictos, inhabilidades y señales de corrupción.', moduleIds:Array.from({length:5},(_,i)=>`pgn-m${50+i}`), practice:'Casos de selección objetiva, supervisión, conflictos y señales de alerta.' },
  { id:'p8', weeks:'Semana 13', title:'Territorio, gestión y documentación', description:'Ordenamiento territorial, indicadores, calidad, gestión documental, atención y elaboración de informes.', moduleIds:Array.from({length:5},(_,i)=>`pgn-m${55+i}`), practice:'Ejercicios de expediente, trazabilidad documental, indicadores y redacción institucional.' },
  { id:'p9', weeks:'Semana 14', title:'Sistemas, datos y evidencia técnica', description:'Especialización para Ingeniería de Sistemas: accesos, logs, bases de datos, correo, metadatos, hash, informes técnicos y análisis de datos.', moduleIds:Array.from({length:10},(_,i)=>`pgn-m${60+i}`), practice:'Laboratorios de evidencia digital y separación entre hallazgo técnico, inferencia y conclusión jurídica.' },
  { id:'p10', weeks:'Semana 15', title:'Competencias comportamentales', description:'Entrena las seis competencias exactas del perfil y aprende a responder con consistencia y criterio laboral.', moduleIds:Array.from({length:5},(_,i)=>`pgn-m${70+i}`), practice:'Bloques cortos de consistencia + casos integrales con método C-E-P-P-A.' },
  { id:'p11', weeks:'Semana 16', title:'Consolidación integral', description:'Reduce teoría nueva. Usa estos módulos como anclas de repaso y deja que el cuaderno de errores y la práctica adaptativa determinen qué otros temas necesitan recuperación.', moduleIds:['pgn-m20','pgn-m22','pgn-m25','pgn-m27','pgn-m30','pgn-m35','pgn-m38','pgn-m39','pgn-m44','pgn-m74'], practice:'Dos simulacros extensos, revisión completa de errores y repaso dirigido por precisión; no vuelvas a estudiar los 75 módulos con la misma intensidad.' },
  { id:'p12', weeks:'Condicional', title:'Especializaciones por dependencia', description:'Economía/Hacienda Pública y Fuerza Pública permanecen como rutas complementarias hasta que exista orientación oficial que defina su aplicabilidad concreta.', moduleIds:Array.from({length:5},(_,i)=>`pgn-m${75+i}`), practice:'Estudiar solo después de consolidar el núcleo principal o cuando la orientación oficial confirme pertinencia.' },
  { id:'p13', weeks:'En paralelo desde semana 9', title:'Refuerzo profesional · Ingeniería de Sistemas', description:'Arquitectura, redes, seguridad, ingeniería de software y gobierno de datos como cobertura específica de tu disciplina profesional, conectada con evidencia y sistemas públicos.', moduleIds:Array.from({length:5},(_,i)=>`pgn-m${80+i}`), practice:'Un laboratorio técnico semanal. Prioriza trazabilidad, límites de inferencia y capacidad de explicar el hallazgo a un operador jurídico.' },
]

export function getStudyPlan(course: Course) {
  return course.id === 'procuraduria-104-2026-3pu15' ? pgnPhases : dianPhases
}
