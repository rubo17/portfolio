import AccountsIcon from "@components/icons/AccountsIcon";
import DebugIcon from "@components/icons/DebugIcon";
import ExplorerIcon from "@components/icons/ExplorerIcon";
import ExtensionsIcon from "@components/icons/ExtensionsIcon";
import ManageIcon from "@components/icons/ManageIcon";
import SearchIcon from "@components/icons/SearchIcon";
import SourceControlIcon from "@components/icons/SourceControlIcon";

const mainButtons = [
  { icon: ExplorerIcon, tooltip: "Explorer (Ctrl+Shift+E)" },
  { icon: SearchIcon, tooltip: "Search (Ctrl+Shift+F)" },
  { icon: SourceControlIcon, tooltip: "Source Control (Ctrl+Shift+G)" },
  { icon: DebugIcon, tooltip: "Run and Debug (Ctrl+Shift+D)" },
  { icon: ExtensionsIcon, tooltip: "Extensions (Ctrl+Shift+X)" },
];
const bottomButtons = [
  { icon: AccountsIcon, tooltip: "Accounts" },
  { icon: ManageIcon, tooltip: "Manage" },
];

export default function SideBar({ active, setActive }) {
  return (
    <aside className="relative w-[54px] bg-main h-full flex flex-col items-center justify-between">
      <div className="flex flex-col h-auto w-full">
        {mainButtons.map(({ icon: Icon, tooltip }, idx) => (
          <button
            key={tooltip}
            data-tooltip={tooltip}
            data-flow="right"
            className={`flex cursor-pointer items-center justify-center w-[54px] h-[54px] group${active === idx ? " bg-accent/20" : ""}`}
            onClick={() => setActive(idx)}
          >
            <Icon className="w-6 h-6" />
          </button>
        ))}
      </div>
      <div className="flex flex-col h-auto">
        {bottomButtons.map(({ icon: Icon, tooltip }) => (
          <button
            key={tooltip}
            data-tooltip={tooltip}
            data-flow="right"
            className="cursor-pointer flex items-center justify-center w-[54px] h-[54px] group"
          >
            <Icon className="w-6 h-6" />
          </button>
        ))}
      </div>
    </aside>
  );
}
