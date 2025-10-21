import Flecha from "@components/icons/Flecha";
import FlechaFolder from "@components/icons/FlechaFolder";
import { useEffect, useState } from "react";
import PanelSection from "./PanelSection";
import { navigate } from 'astro:transitions/client';
const explorerItems = [
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

function getSectionId(filename) {
  // Quita la extensión y reemplaza guiones por guiones bajos si quieres
  return filename
}

function Folder({ item, level = 0, activeFile, setActiveFile }) {
  const [open, setOpen] = useState(item.open);

  // Cargar estado desde localStorage solo en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem(`folder-${item.name}`);
      if (savedState !== null) {
        setOpen(JSON.parse(savedState));
      }
    }
  }, [item.name]);

  // Guardar estado en localStorage cuando cambia
  const toggleOpen = () => {
    const newState = !open;
    setOpen(newState);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`folder-${item.name}`, JSON.stringify(newState));
    }
  };

  return (
    <li className="">
      <div
        className="flex items-center cursor-pointer py-1  hover:bg-accent/10 "
        style={{ paddingLeft: level * 16 }}
        onClick={toggleOpen}
      >
        <FlechaFolder className={`w-3 h-3 mr-1 transition-transform ${open ? "-rotate-90" : ""}`} />
        <span className="font-semibold text-gray-200">{item.name}</span>
      </div>
      {open && item.children && (
        <ul>
          {item.children.map((child, idx) =>
            child.type === 'folder' ? (
              <Folder key={child.name + idx} item={child} level={level + 1} activeFile={activeFile}
                setActiveFile={setActiveFile} />
            ) : (
              <li
                key={child.name + idx}
                className={`flex items-center py-1 cursor-pointer ${
                  activeFile === child.name
                    ? "text-accent font-bold"
                    : "text-gray-400 hover:text-accent"
                }`}
                style={{ paddingLeft: (level + 1) * 16 }}
              >
                {child.url ? (
                  <a
                    href={child.url}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveFile(child.name);
                      navigate(child.url);
                    }}
                  >
                    {child.name}
                  </a>
                ) : (
                  <a
                    href={`#${child.section || getSectionId(child.name)}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveFile(child.name);
                    }}
                  >
                    {child.name}
                  </a>
                )}
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );
}

export default function Explorer({ onClose }) {
  const [activeFile, setActiveFile] = useState(null);

  return (
    <PanelSection>
      <div className="flex items-center px-3 py-2 justify-between">
        <span className="font-bold text-sm tracking-wide text-accent">Explorador de archivos</span>
        <button onClick={onClose}>
          <Flecha className="text-accent" />
        </button>
      </div>
      <ul className="select-none">
        {explorerItems.map((item, idx) =>
          item.type === "folder" ? (
            <Folder
              key={item.name + idx}
              item={item}
              activeFile={activeFile}
              setActiveFile={setActiveFile}
            />) : null
        )}
      </ul>
    </PanelSection>
  );
}