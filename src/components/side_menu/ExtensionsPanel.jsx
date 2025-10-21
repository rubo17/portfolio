import PanelSection from "@components/side_menu/PanelSection";
import { useState } from "react";

export default function ExtensionsPanel() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("installed");

  const installedExtensions = [
    {
      name: "Astro",
      author: "astro-build",
      description: "Soporte de lenguaje para Astro",
      rating: 4.8,
      installs: "2.5M",
      installed: true
    },
    {
      name: "Tailwind CSS IntelliSense",
      author: "Tailwind Labs",
      description: "Autocompletado inteligente para Tailwind",
      rating: 4.9,
      installs: "5.1M",
      installed: true
    },
    {
      name: "ES7+ React/Redux/React-Native",
      author: "dsznajder",
      description: "Snippets para React y tecnologías relacionadas",
      rating: 4.7,
      installs: "8.2M",
      installed: true
    },
    {
      name: "Auto Rename Tag",
      author: "Jun Han",
      description: "Renombra automáticamente etiquetas HTML/XML emparejadas",
      rating: 4.6,
      installs: "15M",
      installed: true
    }
  ];

  const recommendedExtensions = [
    {
      name: "GitLens",
      author: "GitKraken",
      description: "Superpoderes de Git",
      rating: 4.8,
      installs: "24M",
      installed: false
    },
    {
      name: "Prettier",
      author: "Prettier",
      description: "Formateador de código",
      rating: 4.9,
      installs: "35M",
      installed: false
    }
  ];

  const displayExtensions = filter === "installed" ? installedExtensions : recommendedExtensions;

  return (
    <PanelSection>
      <div className="px-3">
        <h2 className="font-bold text-sm tracking-wide text-accent mb-3">EXTENSIONES</h2>

        {/* Search Bar */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Buscar extensiones en Marketplace"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary text-primaryText px-3 py-2 text-xs rounded border border-gray-700 focus:border-accent focus:outline-none"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4 border-b border-gray-700">
          <button
            onClick={() => setFilter("installed")}
            className={`px-3 py-2 text-xs font-medium transition border-b-2 ${
              filter === "installed"
                ? "border-accent text-accent"
                : "border-transparent text-gray-400 hover:text-gray-300"
            }`}
          >
            Instaladas ({installedExtensions.length})
          </button>
          <button
            onClick={() => setFilter("recommended")}
            className={`px-3 py-2 text-xs font-medium transition border-b-2 ${
              filter === "recommended"
                ? "border-accent text-accent"
                : "border-transparent text-gray-400 hover:text-gray-300"
            }`}
          >
            Recomendadas
          </button>
        </div>

        {/* Extensions List */}
        <div className="space-y-3">
          {displayExtensions
            .filter(ext =>
              ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              ext.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((ext, idx) => (
              <div
                key={idx}
                className="p-3 hover:bg-secondary rounded cursor-pointer border border-transparent hover:border-gray-700 transition"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-200 truncate">{ext.name}</h3>
                    <p className="text-xs text-gray-500">{ext.author}</p>
                  </div>
                  {ext.installed ? (
                    <span className="text-xs text-green-400 font-medium whitespace-nowrap">✓ Instalada</span>
                  ) : (
                    <button className="text-xs bg-accent/20 hover:bg-accent/30 text-accent px-2 py-1 rounded transition whitespace-nowrap">
                      Instalar
                    </button>
                  )}
                </div>
                <p className="text-xs text-gray-400 mb-2 line-clamp-2">{ext.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    {ext.rating}
                  </span>
                  <span>{ext.installs} instalaciones</span>
                </div>
              </div>
            ))}
        </div>

        {/* Empty State */}
        {displayExtensions.filter(ext =>
          ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ext.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).length === 0 && (
          <div className="text-center py-8 text-gray-500 text-xs">
            No se encontraron extensiones
          </div>
        )}
      </div>
    </PanelSection>
  )
}
