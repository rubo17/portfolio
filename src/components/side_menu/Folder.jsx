import { useEffect, useState } from "react";
import FlechaFolder from "@components/icons/FlechaFolder";
import { getSectionId } from "./explorerData";

export default function Folder({ item, level = 0, activeFile, setActiveFile }) {
  const [open, setOpen] = useState(item.open);
  const paddingLeft = level === 0 ? 12 : level * 16;

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
        className="flex items-center cursor-pointer py-1 hover:bg-accent/10"
        style={{ paddingLeft }}
        onClick={toggleOpen}
      >
        <FlechaFolder className={`w-3 h-3 mr-1 transition-transform ${open ? "-rotate-90" : ""}`} />
        <span className="font-semibold text-gray-200">{item.name}</span>
      </div>
      {open && item.children && (
        <ul>
          {item.children.map((child, idx) =>
            child.type === 'folder' ? (
              <Folder
                key={child.name + idx}
                item={child}
                level={level + 1}
                activeFile={activeFile}
                setActiveFile={setActiveFile}
              />
            ) : (
              <li
                key={child.name + idx}
                className={`cursor-pointer ${
                  activeFile === child.name
                    ? "text-accent font-bold"
                    : "text-gray-400"
                }`}
              >
                {child.url ? (
                  <a
                    className="block w-full p-1 hover:text-accent"
                    href={child.url}
                    style={{ paddingLeft: (level + 1) * 16 }}
                    onClick={(e) => {
                      setActiveFile(child.name);
                    }}
                  >
                    {child.name}
                  </a>
                ) : (
                  <a
                    className="block w-full p-1 hover:text-accent"
                    href={`#${child.section || getSectionId(child.name)}`}
                    style={{ paddingLeft: (level + 1) * 16 }}
                    onClick={(e) => {
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
