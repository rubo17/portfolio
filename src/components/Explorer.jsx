import PanelSection from "./PanelSection";
export default function Explorer() {
const explorerItems = [
  {
    type: 'folder',
    name: 'src',
    open: true,
    children: [
      { type: 'folder', name: 'portfolio', open: true, children: [
        { type: 'folder', name: 'Astro',open: true },
        { type: 'folder', name: 'Node Modules',open: true },
        { type: 'folder', name: 'public',open: true, children: [
          { type: 'folder', name: 'about_me',open: true, children: [
            { type: 'file', name: 'Sobre mi' },
            { type: 'file', name: 'Experiencia' },
            { type: 'file', name: 'Habilidades' },
            { type: 'file', name: 'Contactame' },
          ] },
        ] },
      ] },
    ],
  }
];


return (
  <PanelSection title={"Explorador de archivoas"}>

  </PanelSection>
)


}