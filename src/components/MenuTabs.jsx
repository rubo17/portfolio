import Cerrar from "@components/icons/CerrarReact";
import { useState } from "react";
import Star from "./icons/Star.jsx";
export default function MenuTabs({ items = ["About me"], activeItem = "About me" }) {
  const [tabs, setTabs] = useState(items);
  const [activeTab, setActiveTab] = useState(activeItem);

  const deleteTab = (item) => {
    if (tabs.length <= 1) return; 

    const filtered = tabs.filter((tab) => tab !== item);
    setTabs(filtered);
    if (activeTab === item && filtered.length > 0) {
      setActiveTab(filtered[0]);
    }
    
  };

  return (
    <nav className="w-full max-h-[56px] bg-secondary border-b border-[#2A2A2A] flex items-center">
      <ul className="flex text-sm font-medium h-12 w-full">
        {tabs.map((item) => (   
          <li
            key={item}
            onClick={() => setActiveTab(item)}
            className={`h-full border-t-2 ${activeTab === item ? "border-t-accent bg-accent/10" : "border-t-transparent"} flex items-center cursor-pointer`}
          >
            <a
              href="#"
              className="group flex items-center gap-2 h-full w-full px-4"
            >
              <Star className="w-5 h-5" />
              <span className="text-primaryText text-[15px] whitespace-nowrap">
                {item}
              </span>
              <span
                onClick={e => {
                  e.stopPropagation();
                  deleteTab(item);
                }}
                className="opacity-0 group-hover:opacity-100 transition hover:bg-gray-700 rounded p-1"
              >
                <Cerrar />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}