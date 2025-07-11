import Flecha from "@components/icons/Flecha";
import FlechaFolder from "@components/icons/FlechaFolder";
import { useState } from "react";
import PanelSection from "./PanelSection";
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
                            { type: "file", name: "sobre-mi.txt" },
                            { type: "file", name: "experiencia.txt" },
                            { type: "file", name: "habilidades.txt" },
                            { type: "file", name: "proyectos.txt" },
                            { type: "file", name: "contacto.txt" },
                        ],
                    },
                ],
            },
        ],
    },
];

function getSectionId(filename) {
  // Quita la extensión y reemplaza guiones por guiones bajos si quieres
  return filename.replace(/\.txt$/, "");
}

function Folder({ item, level = 0 }) {
  const [open, setOpen] = useState(item.open);
  return (
    <li className="">
      <div
        className="flex items-center cursor-pointer py-1  hover:bg-accent/10 "
        style={{ paddingLeft: level * 16 }}
        onClick={() => setOpen((o) => !o)}
      >
        <FlechaFolder className={`w-3 h-3 mr-1 transition-transform ${open ? "-rotate-90" : ""}`} />
        <span className="font-semibold text-gray-200">{item.name}</span>
      </div>
      {open && item.children && (
        <ul>
          {item.children.map((child, idx) =>
            child.type === 'folder' ? (
              <Folder key={child.name + idx} item={child} level={level + 1} />
            ) : (
              <li
                key={child.name + idx}
                className="flex items-center py-1 text-gray-400 hover:text-accent cursor-pointer"
                style={{ paddingLeft: (level + 1) * 16 }}
              >
                <a href={`#${getSectionId(child.name)}`}>{child.name}</a>
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );
}

export default function Explorer({ onClose }) {
    return (
        <PanelSection>
      <div className="flex items-center px-3 py-2 justify-between">
        <span className="font-bold text-sm tracking-wide text-accent">Explorador de archivos</span>
        <button onClick={onClose}>
          <Flecha  className="text-accent" />
        </button>
      </div>
            <ul className="select-none">
                {explorerItems.map((item, idx) =>
                    item.type === "folder" ? (
                        <Folder key={item.name + idx} item={item} />
                    ) : null
                )}
            </ul>
        </PanelSection>
    );
}