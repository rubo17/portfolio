// Fuente única de datos de los proyectos del portfolio.
// Se usa tanto en Proyectos.astro (listado principal) como en SearchPanel.jsx (buscador).
// `icons` son nombres de string que se resuelven a componentes de icono en cada contexto.
export const projects = [
  {
    title: "Barber Time",
    description: "Proyecto para automatizar citas de barberos",
    image: "/barbertime.png",
    linkExternal: "https://app.barbertime.es/",
    link: "/my-projects/barbertime",
    icons: ["Nuxt", "Laravel"],
    finish: true,
  },
  {
    title: "Formación aiudo",
    description: "Proyecto para empresa de cursos",
    image: "/aiudoProyecto.PNG",
    linkExternal: "https://formacion.aiudo.es/",
    link: "/my-projects/aiudo-formacion",
    icons: ["Next", "Laravel"],
    finish: true,
  },
  {
    title: "Longlife",
    description: "Mi proyecto de nutrición",
    image: "/longlife.PNG",
    linkExternal: "https://rubencabrerizo.com/longLife",
    link: "/my-projects/longLife",
    icons: ["Vue", "Codeigniter"],
    finish: true,
  },
  {
    title: "HabitCore",
    description: "PWA para crear y seguir hábitos diarios con notificaciones push y estadísticas de progreso",
    image: "/img/habitcore/habits.png",
    linkExternal: "https://habitcore.es",
    link: "/my-projects/habitcore",
    icons: ["Vue", "Laravel"],
    finish: true,
  },
  {
    title: "Kbre",
    description: "Aplicacion de automatizacion de citas con integracion de whatsapp y google calendar para pequeños negocios y autónomos",
    image: "/img/kbre/login.png",
    link: "#proyectos",
    icons: ["Next", "Nest"],
    finish: false,
  },
];
