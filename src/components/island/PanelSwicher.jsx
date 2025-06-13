import DebugPanel from "@components/DebugPanel";
import Explorer from "@components/Explorer";
import ExtensionsPanel from "@components/ExtensionsPanel";
import SearchPanel from "@components/SearchPanel";
import SideBar from "@components/SideBar";
import SourceControlPanel from "@components/SourceControlPanel";
import { useState } from "react";

export default function PanelSwitcher() {
  const [activePanel, setActivePanel] = useState(0);

  const renderPanel = () => {
    switch (activePanel) {
      case 0: return <Explorer />;
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
