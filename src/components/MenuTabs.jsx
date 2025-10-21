import Cerrar from "@components/icons/CerrarReact";
import { useState, useEffect } from "react";
import Star from "./icons/Star.jsx";
import { navigate } from 'astro:transitions/client';

export default function MenuTabs({ currentPage = "About me" }) {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(currentPage);

  // Cargar tabs desde localStorage al montar
  useEffect(() => {
    const savedTabs = localStorage.getItem('portfolioTabs');
    if (savedTabs) {
      const parsedTabs = JSON.parse(savedTabs);
      setTabs(parsedTabs);

      // Si la página actual no está en los tabs, añadirla
      if (!parsedTabs.some(tab => tab.name === currentPage)) {
        const newTabs = [...parsedTabs, { name: currentPage, url: window.location.pathname }];
        setTabs(newTabs);
        localStorage.setItem('portfolioTabs', JSON.stringify(newTabs));
      }
    } else {
      // Si no hay tabs guardados, crear el primero
      const initialTab = [{ name: currentPage, url: window.location.pathname }];
      setTabs(initialTab);
      localStorage.setItem('portfolioTabs', JSON.stringify(initialTab));
    }
    setActiveTab(currentPage);
  }, [currentPage]);

  const deleteTab = (tabToDelete, e) => {
    e.preventDefault();
    e.stopPropagation();

    if (tabs.length <= 1) return;

    const filtered = tabs.filter((tab) => tab.name !== tabToDelete.name);
    setTabs(filtered);
    localStorage.setItem('portfolioTabs', JSON.stringify(filtered));

    // Si cerramos el tab activo, navegar al primero
    if (activeTab === tabToDelete.name && filtered.length > 0) {
      setActiveTab(filtered[0].name);
      // Navegar usando View Transitions
      navigate(filtered[0].url);
    }
  };

  const handleTabClick = (tab, e) => {
    e.preventDefault();
    setActiveTab(tab.name);

    // Navegar usando View Transitions (sin recarga)
    navigate(tab.url);
  };

  return (
    <nav className="w-full max-h-[56px] bg-secondary border-b border-[#2A2A2A] flex items-center overflow-x-auto scrollbar-hidden">
      <ul className="flex text-sm font-medium h-12">
        {tabs.map((tab) => (
          <li
            key={tab.name}
            onClick={(e) => handleTabClick(tab, e)}
            className={`h-full border-t-2 ${activeTab === tab.name ? "border-t-accent bg-accent/10" : "border-t-transparent"} flex items-center cursor-pointer hover:bg-accent/5 transition`}
          >
            <div className="group flex items-center gap-2 h-full w-full px-4">
              <Star className="w-5 h-5" />
              <span className="text-primaryText text-[15px] whitespace-nowrap">
                {tab.name}
              </span>
              <span
                onClick={(e) => deleteTab(tab, e)}
                className="opacity-0 group-hover:opacity-100 transition hover:bg-gray-700 rounded p-1"
              >
                <Cerrar />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}