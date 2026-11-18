// Datos de la sección de Formación (src/components/about_me/Formacion.astro).
// `actual: true` resalta la formación en curso en el timeline.
export const formacion = [
  {
    nivel: "Máster",
    titulo: "Máster en Product Engineering & IA",
    centro: "Evolve",
    periodo: "En curso",
    actual: true,
    descripcion:
      "Aprendo a llevar una idea de negocio hasta producción con criterio de producto, integrando IA (agentes, RAG, MCPs y LLMs) con control de coste y calidad. Todo con profesionales en activo y un proyecto final con una empresa real.",
    tags: ["Producto", "IA aplicada", "Agentes y RAG"],
  },
  {
    nivel: "Grado Superior",
    titulo: "Desarrollo de Aplicaciones Web",
    siglas: "DAW",
    centro: "Solvam",
    descripcion:
      "Desarrollo frontend y backend, bases de datos, despliegue de aplicaciones y buenas prácticas de programación orientadas a la web.",
    tags: ["Frontend", "Backend", "Bases de datos"],
  },
  {
    nivel: "Grado Medio",
    titulo: "Sistemas Microinformáticos y Redes",
    siglas: "SMR",
    centro: "Solvam",
    descripcion:
      "Montaje y mantenimiento de equipos, sistemas operativos, configuración de redes locales y servicios. La base técnica sobre la que empecé.",
    tags: ["Hardware", "Redes", "Sistemas"],
  },
];
