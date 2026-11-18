// Datos de la sección de Formación (src/components/about_me/Formacion.astro).
// `actual: true` resalta la formación en curso en el timeline.
export const formacion = [
  {
    nivel: "Máster",
    titulo: "Máster en Product Engineering",
    centro: "Envolve",
    periodo: "En curso",
    actual: true,
    descripcion:
      "Formación orientada a construir producto de principio a fin: desde entender el problema del usuario hasta diseñar, desarrollar y lanzar soluciones con impacto real.",
    tags: ["Producto", "Ingeniería", "UX"],
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
