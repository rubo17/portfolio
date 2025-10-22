export const explorerItems = [
  {
    type: "folder",
    name: "portfolio",
    open: true,
    children: [
      {
        type: "folder",
        name: "public",
        open: true,
        children: [
          {
            type: "folder",
            name: "about_me",
            open: true,
            children: [
              { type: "file", name: "sobre-mi", url: "/#sobre-mi" },
              { type: "file", name: "experiencia", url: "/#experiencia" },
              { type: "file", name: "habilidades", url: "/#habilidades" },
              { type: "file", name: "proyectos", url: "/#proyectos" },
              { type: "file", name: "contacto", url: "/#contacto" },
            ],
          },
        ],
      },
      {
        type: "folder",
        name: "src",
        open: true,
        children: [
          {
            type: "folder",
            name: "my_projects",
            open: true,
            children: [
              {
                type: "folder",
                name: "longLife",
                open: false,
                children: [
                  { type: "file", name: "acerca", url: "/my-projects/longLife/#acerca" },
                  { type: "file", name: "tecnologias", url: "/my-projects/longLife/#tecnologias" },
                  { type: "file", name: "desafio", url: "/my-projects/longLife/#desafio" },
                ],
              },
            ],
          },
        ],
      }
    ],
  },
];

export function getSectionId(filename) {
  // Quita la extensión y reemplaza guiones por guiones bajos si quieres
  return filename;
}
