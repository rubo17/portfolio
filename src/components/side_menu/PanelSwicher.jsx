import DebugPanel from "@components/side_menu/DebugPanel";
import Explorer from "@components/side_menu/Explorer";
import ExtensionsPanel from "@components/side_menu/ExtensionsPanel";
import SearchPanel from "@components/side_menu/SearchPanel";
import SourceControlPanel from "@components/side_menu/SourceControlPanel";
import SideBar from "@components/SideBar";
import { useState, useEffect } from "react";

export default function PanelSwitcher() {
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setActivePanel(null);
      }
    };

    // Verificar al montar el componente
    handleResize();

    // Escuchar cambios de tamaño de ventana
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderPanel = () => {
    switch (activePanel) {
      case 0: return <Explorer onClose={() => setActivePanel(null)} />;
      case 1: return <SearchPanel />;
      case 2: return <SourceControlPanel />;
      case 3: return <DebugPanel />;
      case 4: return <ExtensionsPanel />;
      default: return null;
    }
  };

  return (
    <div className="flex h-full">
      <SideBar active={activePanel} setActive={setActivePanel} />
      {renderPanel()}
    </div>
  );
}
