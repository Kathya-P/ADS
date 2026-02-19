const quizData = [
  {
    type: "mc",
    question: "Los requerimientos en el ciclo de vida del software:",
    options: [
      "Solo sirven para documentar",
      "Orientan el diseno arquitectonico",
      "Se definen al final del proyecto",
      "Reemplazan las pruebas",
    ],
    answerIndex: 1,
    answerText: "Orientan el diseno arquitectonico.",
  },
  {
    type: "mc",
    question: "Una consecuencia de requerimientos incorrectos es:",
    options: [
      "Mejora automatica del sistema",
      "Ahorro de costos garantizado",
      "Sistema fallido aunque este bien programado",
      "Mas estabilidad sin pruebas",
    ],
    answerIndex: 2,
    answerText: "Sistema fallido aunque este bien programado.",
  },
  {
    type: "mc",
    question: "Segun Pressman y Sommerville, mas del 50% de errores criticos se originan en:",
    options: ["Implementacion", "Pruebas", "Analisis", "Mantenimiento"],
    answerIndex: 2,
    answerText: "Analisis.",
  },
  {
    type: "mc",
    question: "En un sistema comercial, un ejemplo de mala definicion de requerimientos es:",
    options: ["Elegir el lenguaje", "Definir reglas de descuentos", "Comprar servidores", "Disenar la UI"],
    answerIndex: 1,
    answerText: "Definir reglas de descuentos.",
  },
  {
    type: "mc",
    question: "Un requerimiento de software se define como:",
    options: [
      "Un plan de marketing",
      "Una condicion, capacidad o restriccion a cumplir",
      "Una tecnologia recomendada",
      "Un prototipo visual",
    ],
    answerIndex: 1,
    answerText: "Una condicion, capacidad o restriccion a cumplir.",
  },
  {
    type: "mc",
    question: "Un buen requerimiento NO debe ser:",
    options: ["Claro", "Verificable", "Ambiguo", "Comprensible"],
    answerIndex: 2,
    answerText: "Ambiguo.",
  },
  {
    type: "mc",
    question: "El dominio del problema es:",
    options: [
      "La arquitectura tecnica",
      "El entorno real de la necesidad",
      "El diagrama de clases",
      "El lenguaje de programacion",
    ],
    answerIndex: 1,
    answerText: "El entorno real de la necesidad.",
  },
  {
    type: "mc",
    question: "La definicion clara del problema debe:",
    options: [
      "Mencionar tecnologia propuesta",
      "Describir la situacion negativa actual",
      "Incluir la solucion final",
      "Incluir el presupuesto",
    ],
    answerIndex: 1,
    answerText: "Describir la situacion negativa actual.",
  },
  {
    type: "mc",
    question: "El alcance del sistema responde a:",
    options: [
      "Que cubrira el sistema y que procesos incluira",
      "Que hardware se comprara",
      "Que lenguaje se usara",
      "Que proveedores se contrataran",
    ],
    answerIndex: 0,
    answerText: "Que cubrira el sistema y que procesos incluira.",
  },
  {
    type: "mc",
    question: "Una exclusion del alcance responde a:",
    options: [
      "Que no sera parte del sistema",
      "Que pruebas se haran",
      "Que version se lanza primero",
      "Que usuarios no existen",
    ],
    answerIndex: 0,
    answerText: "Que no sera parte del sistema.",
  },
  {
    type: "mc",
    question: "En la diferencia problema/necesidad/solucion, \"Sistema academico\" es:",
    options: ["Problema", "Necesidad", "Solucion", "Restriccion"],
    answerIndex: 2,
    answerText: "Solucion.",
  },
  {
    type: "mc",
    question: "Un error comun por mala definicion del dominio es:",
    options: ["Validar supuestos", "Identificar actores clave", "Proponer soluciones prematuras", "Delimitar alcance"],
    answerIndex: 2,
    answerText: "Proponer soluciones prematuras.",
  },
  {
    type: "tf",
    question: "Los requerimientos sirven como base para pruebas y validacion.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    question: "Un sistema puede estar bien programado y aun asi fallar por requerimientos incorrectos.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    question: "El dominio del problema es equivalente al sistema.",
    options: ["Verdadero", "Falso"],
    answerIndex: 1,
    answerText: "Falso.",
  },
  {
    type: "tf",
    question: "La definicion del problema debe mencionar tecnologias modernas.",
    options: ["Verdadero", "Falso"],
    answerIndex: 1,
    answerText: "Falso.",
  },
  {
    type: "tf",
    question: "Las exclusiones ayudan a evitar expectativas irreales.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    question: "No identificar actores clave es un error comun.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    question: "\"Necesidad\" es una situacion negativa actual.",
    options: ["Verdadero", "Falso"],
    answerIndex: 1,
    answerText: "Falso.",
  },
  {
    type: "tf",
    question: "Ignorar procesos existentes es un error comun.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "short",
    question: "Escribe la pregunta a la que responden los requerimientos de software.",
    answerText: "Que debe hacer el sistema y bajo que condiciones?",
    keywords: ["debe hacer el sistema", "condiciones"],
    minMatches: 2,
  },
  {
    type: "short",
    question: "Menciona dos caracteristicas de un buen requerimiento.",
    answerText: "Ej: claro, no ambiguo, verificable, comprensible, necesario.",
    keywords: ["claro", "no ambiguo", "verificable", "comprensible", "necesario"],
    minMatches: 2,
  },
  {
    type: "short",
    question: "Da un ejemplo de problema en contexto educativo.",
    answerText: "Ej: registros manuales y perdida de informacion.",
    keywords: ["registros manuales", "perdida de informacion"],
    minMatches: 1,
  },
  {
    type: "short",
    question: "Da un ejemplo de necesidad en el ambito academico.",
    answerText: "Ej: control academico.",
    keywords: ["control academico"],
    minMatches: 1,
  },
  {
    type: "short",
    question: "En el contexto organizacional, nombra dos aspectos a analizar.",
    answerText: "Ej: procesos actuales, actores involucrados, normativas legales, cultura organizacional.",
    keywords: ["procesos actuales", "actores involucrados", "normativas legales", "cultura organizacional"],
    minMatches: 2,
  },
  {
    type: "short",
    question: "Indica una posible consecuencia de requerimientos mal definidos.",
    answerText: "Ej: perdidas economicas, conflictos legales, usuarios insatisfechos, sobre-trabajo.",
    keywords: ["perdidas economicas", "conflictos legales", "usuarios insatisfechos", "sobre trabajo"],
    minMatches: 1,
  },
  {
    type: "short",
    question: "Explica brevemente por que no se debe proponer la solucion al definir el problema.",
    answerText:
      "Ej: para describir la situacion negativa actual sin sesgar el analisis ni forzar una tecnologia.",
    keywords: ["situacion negativa", "sin sesgar", "sin forzar", "sin tecnologia", "sin proponer"],
    minMatches: 1,
  },
  {
    type: "mc",
    question: "La estrategia organizacional define:",
    options: [
      "Los lenguajes de programacion",
      "El rumbo: que quiere lograr y como competir",
      "Solo los procesos tecnicos",
      "Un backlog de historias de usuario",
    ],
    answerIndex: 1,
    answerText: "El rumbo: que quiere lograr y como competir.",
  },
  {
    type: "mc",
    question: "El software, respecto a la estrategia organizacional, es:",
    options: [
      "Un fin en si mismo",
      "Un medio para ejecutar la estrategia",
      "Un reemplazo de la estrategia",
      "Un detalle tecnico sin impacto",
    ],
    answerIndex: 1,
    answerText: "Un medio para ejecutar la estrategia.",
  },
  {
    type: "mc",
    question: "Un sistema mal alineado puede:",
    options: [
      "Automatizar procesos incorrectos",
      "Eliminar toda la burocracia",
      "Garantizar competitividad",
      "Evitar cualquier error",
    ],
    answerIndex: 0,
    answerText: "Automatizar procesos incorrectos.",
  },
  {
    type: "mc",
    question: "Las necesidades estrategicas surgen cuando hay brechas entre:",
    options: [
      "Objetivos y presupuesto",
      "La situacion actual y la situacion deseada",
      "Usuarios y tecnologia",
      "Procesos y organigramas",
    ],
    answerIndex: 1,
    answerText: "La situacion actual y la situacion deseada.",
  },
  {
    type: "mc",
    question: "Las necesidades estrategicas NO son todavia:",
    options: ["Requerimientos", "Razones de negocio", "Justificacion del proyecto", "Brechas"],
    answerIndex: 0,
    answerText: "Requerimientos.",
  },
  {
    type: "mc",
    question: "Los objetivos organizacionales deben ser:",
    options: [
      "Claros, medibles y alineados a la estrategia",
      "Largos y tecnicos",
      "Confidenciales y cambiantes",
      "Independientes de la estrategia",
    ],
    answerIndex: 0,
    answerText: "Claros, medibles y alineados a la estrategia.",
  },
  {
    type: "mc",
    question: "La alineacion del software se logra cuando:",
    options: [
      "Cada funcionalidad tiene justificacion organizacional",
      "Se agregan mas funcionalidades",
      "El sistema usa tecnologia moderna",
      "El presupuesto es alto",
    ],
    answerIndex: 0,
    answerText: "Cada funcionalidad tiene justificacion organizacional.",
  },
  {
    type: "mc",
    question: "Tecnicas para identificar necesidades estrategicas:",
    options: [
      "Entrevista, encuesta, guia de observacion, analisis documental",
      "Solo entrevistas",
      "Solo encuestas",
      "Solo analisis de codigo",
    ],
    answerIndex: 0,
    answerText: "Entrevista, encuesta, guia de observacion, analisis documental.",
  },
  {
    type: "mc",
    question: "La entrevista busca principalmente:",
    options: [
      "Vision estrategica",
      "Detalles tecnicos del sistema",
      "Metricas de rendimiento",
      "Soluciones predisenadas",
    ],
    answerIndex: 0,
    answerText: "Vision estrategica.",
  },
  {
    type: "mc",
    question: "En el analisis documental se revisan, por ejemplo:",
    options: [
      "Plan estrategico, manuales de procesos, informes de auditoria",
      "Solo tickets de soporte",
      "Solo codigo fuente",
      "Solo perfiles de usuario",
    ],
    answerIndex: 0,
    answerText: "Plan estrategico, manuales de procesos, informes de auditoria.",
  },
  {
    type: "tf",
    question: "Las necesidades estrategicas justifican el proyecto, pero no son requerimientos.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    question: "Todo requerimiento debe responder a que objetivo organizacional contribuye.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    question: "La encuesta del ejemplo se aplica con escala 1-5 a usuarios operativos.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    question: "Un sistema mal alineado siempre se convierte en una inversion.",
    options: ["Verdadero", "Falso"],
    answerIndex: 1,
    answerText: "Falso.",
  },
  {
    type: "tf",
    question: "La matriz documentada relaciona necesidades estrategicas, objetivos, requerimientos y soluciones.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "short",
    question: "Menciona dos ejemplos de necesidades estrategicas.",
    answerText: "Ej: reducir tiempos de atencion al cliente, mejorar la toma de decisiones, aumentar competitividad, optimizar recursos.",
    keywords: ["reducir tiempos", "mejorar la toma de decisiones", "aumentar competitividad", "optimizar recursos"],
    minMatches: 2,
  },
  {
    type: "short",
    question: "Nombra dos elementos que se relacionan en la matriz documentada del proyecto.",
    answerText: "Ej: necesidades estrategicas, objetivos, requerimientos, soluciones propuestas.",
    keywords: ["necesidades", "objetivos", "requerimientos", "soluciones"],
    minMatches: 2,
  },
  {
    type: "short",
    question: "En el ejemplo de inventarios, cual es el requerimiento?",
    answerText: "Actualizacion automatica.",
    keywords: ["actualizacion automatica"],
    minMatches: 1,
  },
  {
    type: "short",
    question: "En el ejemplo de alineacion, que funcionalidad se alinea con el objetivo de reducir tiempos de atencion?",
    answerText: "Automatizacion de procesos y reportes en tiempo real.",
    keywords: ["automatizacion", "reportes en tiempo real"],
    minMatches: 1,
  },
  {
    type: "short",
    question: "Escribe dos preguntas tipicas de una entrevista a gerencia general.",
    answerText: "Ej: principales problemas actuales, procesos criticos, informacion para decisiones, que espera mejorar con un sistema.",
    keywords: ["problemas actuales", "procesos criticos", "informacion", "decisiones", "mejorar"],
    minMatches: 2,
  },
  {
    type: "short",
    question: "Da un ejemplo de un aspecto observado y su observacion en la guia de observacion.",
    answerText: "Ej: flujo del proceso -> manual, uso de tecnologia -> limitado, errores visibles -> frecuentes.",
    keywords: ["flujo del proceso", "manual", "uso de tecnologia", "limitado", "errores visibles", "frecuentes"],
    minMatches: 2,
  },
  {
    type: "mc",
    question:
      "En el ciclo de vida del desarrollo de software, las fases son: planificacion, requisitos, diseno y prototipo, desarrollo, pruebas, despliegue, operaciones y mantenimiento. Que fase sigue a Requisitos?",
    options: ["Planificacion", "Diseno y prototipo", "Desarrollo", "Pruebas"],
    answerIndex: 1,
    answerText: "Diseno y prototipo.",
  },
  {
    type: "mc",
    question:
      "En la matriz de necesidades estrategicas vs software, el registro dice: Necesidad \"Procesos manuales y repetitivos\" con objetivo \"Reducir errores y tiempos operativos\". Cual es el aporte del software?",
    options: [
      "Genera reportes automaticos y consolidados",
      "Automatiza procesos clave y reduce intervencion manual",
      "Registra cada operacion para auditoria",
      "Centraliza la informacion en una sola plataforma",
    ],
    answerIndex: 1,
    answerText: "Automatiza procesos clave y reduce intervencion manual.",
  },
  {
    type: "mc",
    question:
      "En ingenieria de software, no todo lo que el sistema debe hacer es un requerimiento funcional. Esa informacion adicional se conoce como:",
    options: ["Restricciones y premisas", "Historias de usuario", "Casos de uso", "Prototipos"],
    answerIndex: 0,
    answerText: "Restricciones y premisas.",
  },
  {
    type: "mc",
    question: "Identificar bien restricciones y premisas evita:",
    options: [
      "Fallos de diseno, sobrecostos y proyectos inviables",
      "La documentacion del sistema",
      "Las pruebas de software",
      "La necesidad de analisis",
    ],
    answerIndex: 0,
    answerText: "Fallos de diseno, sobrecostos y proyectos inviables.",
  },
  {
    type: "mc",
    question: "Las restricciones influyen directamente en:",
    options: [
      "Arquitectura, tecnologias, alcance, tiempos/costos y seguridad/legalidad",
      "Solo la interfaz",
      "Solo la base de datos",
      "Solo las pruebas",
    ],
    answerIndex: 0,
    answerText: "Arquitectura, tecnologias, alcance, tiempos/costos y seguridad/legalidad.",
  },
  {
    type: "mc",
    question: "Las restricciones impactan la arquitectura porque condicionan:",
    options: [
      "El tipo de arquitectura (monolitica, en capas, cliente-servidor, microservicios)",
      "Solo el lenguaje",
      "Solo el cronograma",
      "Solo los roles del equipo",
    ],
    answerIndex: 0,
    answerText: "El tipo de arquitectura (monolitica, en capas, cliente-servidor, microservicios).",
  },
  {
    type: "mc",
    question: "Las restricciones afectan la seleccion de tecnologias porque condicionan:",
    options: [
      "Lenguajes, frameworks, bases de datos y plataformas disponibles",
      "Solo el color de la UI",
      "Solo el numero de usuarios",
      "Solo la documentacion",
    ],
    answerIndex: 0,
    answerText: "Lenguajes, frameworks, bases de datos y plataformas disponibles.",
  },
  {
    type: "mc",
    question: "En el alcance funcional, una restriccion puede:",
    options: [
      "Definir que funcionalidades se incluyen y cuales se postergan o eliminan",
      "Evitar toda priorizacion",
      "Eliminar las pruebas",
      "Impedir el analisis del problema",
    ],
    answerIndex: 0,
    answerText: "Definir que funcionalidades se incluyen y cuales se postergan o eliminan.",
  },
  {
    type: "mc",
    question: "Las restricciones de tiempo y costo establecen:",
    options: [
      "Limites claros al cronograma y esfuerzo del proyecto",
      "La arquitectura ideal",
      "El contenido del backlog",
      "La estrategia comercial",
    ],
    answerIndex: 0,
    answerText: "Limites claros al cronograma y esfuerzo del proyecto.",
  },
  {
    type: "mc",
    question: "Plazos cortos pueden implicar:",
    options: [
      "Menor profundidad en el analisis, reduccion de pruebas y entregas parciales",
      "Mayor presupuesto",
      "Mas funcionalidades",
      "Cero riesgo",
    ],
    answerIndex: 0,
    answerText: "Menor profundidad en el analisis, reduccion de pruebas y entregas parciales.",
  },
  {
    type: "mc",
    question: "Las restricciones legales y normativas influyen en:",
    options: [
      "Diseno de seguridad, gestion de datos y mecanismos de acceso/auditoria",
      "Solo el logo",
      "Solo el hosting",
      "Solo la velocidad del sistema",
    ],
    answerIndex: 0,
    answerText: "Diseno de seguridad, gestion de datos y mecanismos de acceso/auditoria.",
  },
  {
    type: "mc",
    question:
      "En el ejemplo general: servidores locales antiguos, bajo presupuesto y cumplimiento de leyes de datos. Cual es una restriccion legal?",
    options: [
      "Cumplir leyes de proteccion de datos",
      "Servidores locales antiguos",
      "Bajo presupuesto",
      "Sistema web moderno",
    ],
    answerIndex: 0,
    answerText: "Cumplir leyes de proteccion de datos.",
  },
  {
    type: "mc",
    question: "Una restriccion se define como:",
    options: [
      "Limitacion impuesta que condiciona como se disena, construye o implementa el sistema",
      "Lista de funcionalidades",
      "Historia de usuario",
      "Prototipo visual",
    ],
    answerIndex: 0,
    answerText: "Limitacion impuesta que condiciona como se disena, construye o implementa el sistema.",
  },
  {
    type: "mc",
    question: "Las restricciones no se negocian facilmente porque provienen de:",
    options: [
      "Normativas, presupuesto, infraestructura y politicas organizacionales",
      "Preferencias personales",
      "Colores de la interfaz",
      "Gusto del equipo",
    ],
    answerIndex: 0,
    answerText: "Normativas, presupuesto, infraestructura y politicas organizacionales.",
  },
  {
    type: "mc",
    question: "Tipos de restricciones:",
    options: [
      "Tecnicas, legales, economicas y temporales",
      "Funcionales y no funcionales",
      "De negocio y de interfaz",
      "De seguridad y usabilidad",
    ],
    answerIndex: 0,
    answerText: "Tecnicas, legales, economicas y temporales.",
  },
  {
    type: "mc",
    question: "Ejemplo de restriccion tecnica:",
    options: [
      "Lenguaje obligatorio, sistema operativo especifico o integracion con legados",
      "Cumplir ley de datos",
      "Presupuesto limitado",
      "Fecha fija de entrega",
    ],
    answerIndex: 0,
    answerText: "Lenguaje obligatorio, sistema operativo especifico o integracion con legados.",
  },
  {
    type: "mc",
    question: "Ejemplo de restriccion legal:",
    options: [
      "Proteccion de datos personales",
      "Licencias de software",
      "Plazos contractuales",
      "Recursos humanos reducidos",
    ],
    answerIndex: 0,
    answerText: "Proteccion de datos personales.",
  },
  {
    type: "mc",
    question: "Ejemplo de restriccion economica:",
    options: [
      "Presupuesto limitado o licencias de software",
      "Regulaciones sanitarias",
      "Sistema operativo especifico",
      "Fecha fija de entrega",
    ],
    answerIndex: 0,
    answerText: "Presupuesto limitado o licencias de software.",
  },
  {
    type: "mc",
    question: "Ejemplo de restriccion temporal:",
    options: [
      "Fecha fija de entrega o plazos contractuales",
      "Normas contables",
      "Integracion con legados",
      "Presupuesto limitado",
    ],
    answerIndex: 0,
    answerText: "Fecha fija de entrega o plazos contractuales.",
  },
  {
    type: "mc",
    question: "Una premisa del sistema es:",
    options: [
      "Suposicion aceptada como verdadera al inicio del proyecto",
      "Una funcionalidad obligatoria",
      "Un requisito de seguridad",
      "Una prueba automatizada",
    ],
    answerIndex: 0,
    answerText: "Suposicion aceptada como verdadera al inicio del proyecto.",
  },
  {
    type: "mc",
    question: "Si una premisa falla, entonces:",
    options: ["El sistema puede fallar", "No pasa nada", "Se elimina el proyecto", "Se ignora"],
    answerIndex: 0,
    answerText: "El sistema puede fallar.",
  },
  {
    type: "mc",
    question: "Ejemplo de premisa:",
    options: [
      "Los usuarios tendran acceso a internet",
      "Cumplir ley de datos",
      "Presupuesto limitado",
      "Lenguaje obligatorio",
    ],
    answerIndex: 0,
    answerText: "Los usuarios tendran acceso a internet.",
  },
  {
    type: "mc",
    question: "Diferencia clave: la restriccion limita como se construye el sistema y el requerimiento:",
    options: [
      "Define que hace el sistema",
      "Define el presupuesto",
      "Define el equipo",
      "Define el servidor",
    ],
    answerIndex: 0,
    answerText: "Define que hace el sistema.",
  },
  {
    type: "mc",
    question: "Segun la comparacion, una restriccion suele ser:",
    options: ["No negociable", "Siempre negociable", "Opcional", "Temporal"],
    answerIndex: 0,
    answerText: "No negociable.",
  },
  {
    type: "mc",
    question: "En la clasificacion de ejemplos, \"Usuarios capacitados\" corresponde a:",
    options: ["Premisa", "Restriccion legal", "Restriccion tecnica", "Requerimiento"],
    answerIndex: 0,
    answerText: "Premisa.",
  },
  {
    type: "mc",
    question: "En la clasificacion de ejemplos, \"Sistema debe facturar\" corresponde a:",
    options: ["Requerimiento", "Premisa", "Restriccion temporal", "Restriccion economica"],
    answerIndex: 0,
    answerText: "Requerimiento.",
  },
  {
    type: "tf",
    question: "Confundir una limitacion con una funcionalidad es un error comun.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    question: "Un buen analisis separa claramente restricciones y requerimientos desde el inicio.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "short",
    question: "Escribe dos ejemplos de restricciones tecnicas.",
    answerText: "Ej: lenguaje obligatorio, sistema operativo especifico, integracion con sistemas heredados.",
    keywords: ["lenguaje obligatorio", "sistema operativo", "integracion", "heredados"],
    minMatches: 2,
  },
  {
    type: "short",
    question: "Da dos ejemplos de restricciones legales o normativas.",
    answerText: "Ej: proteccion de datos personales, normas contables, regulaciones sanitarias.",
    keywords: ["proteccion de datos", "normas contables", "regulaciones sanitarias"],
    minMatches: 2,
  },
  {
    type: "short",
    question: "Menciona dos ejemplos de restricciones economicas.",
    answerText: "Ej: presupuesto limitado, licencias de software, recursos humanos reducidos.",
    keywords: ["presupuesto", "licencias", "recursos humanos"],
    minMatches: 2,
  },
  {
    type: "short",
    question: "Menciona dos ejemplos de restricciones temporales.",
    answerText: "Ej: fecha fija de entrega, calendario academico, plazos contractuales.",
    keywords: ["fecha fija", "calendario academico", "plazos contractuales"],
    minMatches: 2,
  },
  {
    type: "short",
    question: "Da dos ejemplos de premisas del sistema.",
    answerText: "Ej: usuarios con acceso a internet, personal capacitado, datos correctos.",
    keywords: ["acceso a internet", "personal capacitado", "datos correctos"],
    minMatches: 2,
  },
];

const TOPIC_LABELS = {
  all: "Todos los temas",
  tema1: "Tema 1: Requerimientos y dominio del problema",
  tema2: "Tema 2: Identificacion de necesidades estrategicas",
  tema3: "Tema 3: Restricciones y premisas",
};
const TOPIC_ORDER = ["all", "tema1", "tema2", "tema3"];
const THEME1_COUNT = 27;
const THEME3_MARKER_QUESTION =
  "En ingenieria de software, no todo lo que el sistema debe hacer es un requerimiento funcional. Esa informacion adicional se conoce como:";

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const shortContainer = document.getElementById("short-container");
const shortAnswer = document.getElementById("short-answer");
const feedback = document.getElementById("feedback");
const countLabel = document.getElementById("question-count");
const progressFill = document.getElementById("progress-fill");
const topicTitle = document.getElementById("topic-title");
const topicSelect = document.getElementById("topic-select");
const shuffleButton = document.getElementById("shuffle-btn");
const checkButton = document.getElementById("check-btn");
const showButton = document.getElementById("show-btn");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentIndex = 0;
let currentQuestionIndex = 0;
let currentTopic = "tema1";
let filteredIndices = [];
const userAnswers = Array.from({ length: quizData.length }, () => ({ value: null }));

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildOptions(question, savedValue, questionIndex) {
  optionsContainer.innerHTML = "";
  const groupName = "answer";

  question.options.forEach((option, index) => {
    const optionId = `option-${index}`;
    const wrapper = document.createElement("label");
    wrapper.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = groupName;
    input.id = optionId;
    input.value = index;
    if (savedValue !== null && Number(savedValue) === index) {
      input.checked = true;
    }

    const text = document.createElement("span");
    text.textContent = option;

    input.addEventListener("change", () => {
      userAnswers[questionIndex].value = index;
    });

    wrapper.appendChild(input);
    wrapper.appendChild(text);
    optionsContainer.appendChild(wrapper);
  });
}

function showShortAnswer(savedValue) {
  shortContainer.classList.remove("hidden");
  shortAnswer.value = savedValue || "";
}

function hideShortAnswer() {
  shortContainer.classList.add("hidden");
  shortAnswer.value = "";
}

function updateProgress() {
  const total = filteredIndices.length;
  const index = currentIndex + 1;
  countLabel.textContent = `${index} / ${total}`;
  progressFill.style.width = `${(index / total) * 100}%`;
}

function assignTopics() {
  const theme3Start = quizData.findIndex(
    (item) => item.question === THEME3_MARKER_QUESTION
  );
  const theme3Index = theme3Start === -1 ? Number.MAX_SAFE_INTEGER : theme3Start;

  quizData.forEach((item, index) => {
    if (index < THEME1_COUNT) {
      item.topic = "tema1";
      return;
    }

    if (index >= theme3Index) {
      item.topic = "tema3";
      return;
    }

    item.topic = "tema2";
  });
}

function buildTopicOptions() {
  const topicsInData = new Set(quizData.map((item) => item.topic));
  const orderedTopics = TOPIC_ORDER.filter((topic) =>
    topic === "all" ? true : topicsInData.has(topic)
  );

  topicSelect.innerHTML = "";
  orderedTopics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = TOPIC_LABELS[topic] || topic;
    topicSelect.appendChild(option);
  });

  currentTopic = orderedTopics[0] || "tema1";
  topicSelect.value = currentTopic;
  updateTopicTitle();
}

function updateTopicTitle() {
  topicTitle.textContent = TOPIC_LABELS[currentTopic] || "Tema";
}

function shuffleIndices(indices) {
  for (let i = indices.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
}

function buildFilteredIndices() {
  if (currentTopic === "all") {
    filteredIndices = quizData.map((_, index) => index);
    return;
  }

  filteredIndices = quizData
    .map((item, index) => (item.topic === currentTopic ? index : null))
    .filter((index) => index !== null);

  if (filteredIndices.length === 0) {
    filteredIndices = quizData.map((_, index) => index);
  }
}

function renderQuestion() {
  currentQuestionIndex = filteredIndices[currentIndex];
  const question = quizData[currentQuestionIndex];
  const savedValue = userAnswers[currentQuestionIndex].value;

  questionText.textContent = question.question;
  feedback.textContent = "";
  feedback.className = "feedback";

  if (question.type === "short") {
    optionsContainer.innerHTML = "";
    hideShortAnswer();
    showShortAnswer(savedValue);
  } else {
    hideShortAnswer();
    buildOptions(question, savedValue, currentQuestionIndex);
  }

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === filteredIndices.length - 1;

  updateProgress();
  animateQuestion();
}

function evaluateShortAnswer(question, userValue) {
  if (!userValue) {
    return false;
  }

  const normalized = normalizeText(userValue);
  let matches = 0;

  question.keywords.forEach((keyword) => {
    const normalizedKeyword = normalizeText(keyword);
    if (normalized.includes(normalizedKeyword)) {
      matches += 1;
    }
  });

  return matches >= (question.minMatches || 1);
}

function showFeedback(isCorrect, correctAnswer, showOnly = false) {
  if (showOnly) {
    feedback.textContent = `Respuesta correcta: ${correctAnswer}`;
    feedback.className = "feedback";
    return;
  }

  if (isCorrect) {
    feedback.textContent = `Correcta. ${correctAnswer}`;
    feedback.className = "feedback correct";
  } else {
    feedback.textContent = `Incorrecta. Respuesta correcta: ${correctAnswer}`;
    feedback.className = "feedback incorrect";
  }
}

function checkAnswer() {
  const question = quizData[currentQuestionIndex];
  const userValue = userAnswers[currentQuestionIndex].value;

  if (question.type === "short") {
    const isCorrect = evaluateShortAnswer(question, userValue);
    showFeedback(isCorrect, question.answerText);
    return;
  }

  if (userValue === null || userValue === undefined) {
    feedback.textContent = "Selecciona una opcion antes de revisar.";
    feedback.className = "feedback warning";
    return;
  }

  const isCorrect = Number(userValue) === question.answerIndex;
  showFeedback(isCorrect, question.answerText);
}

function showCorrectAnswer() {
  const question = quizData[currentQuestionIndex];
  showFeedback(false, question.answerText, true);
}

function animateQuestion() {
  questionText.classList.remove("fade-in");
  void questionText.offsetWidth;
  questionText.classList.add("fade-in");
}

checkButton.addEventListener("click", checkAnswer);
showButton.addEventListener("click", showCorrectAnswer);
shuffleButton.addEventListener("click", () => {
  if (filteredIndices.length < 2) {
    return;
  }

  shuffleIndices(filteredIndices);
  currentIndex = 0;
  renderQuestion();
});
shortAnswer.addEventListener("input", () => {
  userAnswers[currentQuestionIndex].value = shortAnswer.value;
});
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
});
nextButton.addEventListener("click", () => {
  if (currentIndex < filteredIndices.length - 1) {
    currentIndex += 1;
    renderQuestion();
  }
});

topicSelect.addEventListener("change", (event) => {
  currentTopic = event.target.value;
  updateTopicTitle();
  currentIndex = 0;
  buildFilteredIndices();
  renderQuestion();
});

assignTopics();
buildTopicOptions();
buildFilteredIndices();
renderQuestion();
