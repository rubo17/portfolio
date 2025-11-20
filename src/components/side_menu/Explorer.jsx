import Flecha from "@components/icons/Flecha";
import { useEffect, useState } from "react";
import PanelSection from "./PanelSection";
import Folder from "./Folder";
import { explorerItems } from "./explorerData";

export default function Explorer({ onClose }) {
  const [activeFile, setActiveFile] = useState(null);

  // Sincronizar activeFile con la URL actual
  useEffect(() => {
    const updateActiveFromUrl = () => {
      const currentPath = window.location.pathname;
      const currentHash = window.location.hash;

      // Buscar el archivo activo basado en la URL actual
      const findActiveFile = (items) => {
        for (const item of items) {
          if (item.type === 'folder' && item.children) {
            const found = findActiveFile(item.children);
            if (found) return found;
          } else if (item.type === 'file' && item.url) {
            // Comparar la URL completa (path + hash)
            if (item.url === currentPath + currentHash || item.url === currentHash) {
              return item.id || item.name;
            }
          }
        }
        return null;
      };

      const active = findActiveFile(explorerItems);
      if (active) {
        setActiveFile(active);
      }
    };

    // Actualizar al montar y cuando cambie la URL
    updateActiveFromUrl();

    // Escuchar cambios en la navegación
    const handleNavigation = () => {
      setTimeout(updateActiveFromUrl, 50); // Pequeño delay para asegurar que la URL se actualizó
    };

    window.addEventListener('hashchange', handleNavigation);
    document.addEventListener('astro:page-load', handleNavigation);
    document.addEventListener('astro:after-swap', handleNavigation);

    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      document.removeEventListener('astro:page-load', handleNavigation);
      document.removeEventListener('astro:after-swap', handleNavigation);
    };
  }, []);

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