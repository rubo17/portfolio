import DebugPanel from "@components/side_menu/DebugPanel";
import Explorer from "@components/side_menu/Explorer";
import ExtensionsPanel from "@components/side_menu/ExtensionsPanel";
import SearchPanel from "@components/side_menu/SearchPanel";
import SourceControlPanel from "@components/side_menu/SourceControlPanel";
import SideBar from "@components/SideBar";
import { useState, useEffect } from "react";

export default function PanelSwitcher() {
  const [activePanel, setActivePanel] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setActivePanel(null);
    };

    handleResize();
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
      {activePanel !== null && isMobile && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setActivePanel(null)}
        />
      )}
      {renderPanel()}
    </div>
  );
}
