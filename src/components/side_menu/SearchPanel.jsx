import PanelSection from "@components/side_menu/PanelSection";
import { useState } from "react";

export default function SearchPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    matchCase: false,
    matchWholeWord: false,
    useRegex: false
  });

  return (
    <PanelSection>
      <div className="px-3">
        <h2 className="font-bold text-sm tracking-wide text-accent mb-3">BUSCAR</h2>

        {/* Search Input */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-secondary text-primaryText px-3 py-2 text-xs rounded border border-gray-700 focus:border-accent focus:outline-none"
          />
        </div>

        {/* Filter Options */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFilters(f => ({ ...f, matchCase: !f.matchCase }))}
            className={`px-2 py-1 text-xs rounded border ${
              filters.matchCase
                ? 'bg-accent/20 border-accent text-accent'
                : 'border-gray-700 text-gray-400 hover:border-gray-500'
            }`}
            title="Coincidir mayúsculas/minúsculas"
          >
            Aa
          </button>
          <button
            onClick={() => setFilters(f => ({ ...f, matchWholeWord: !f.matchWholeWord }))}
            className={`px-2 py-1 text-xs rounded border ${
              filters.matchWholeWord
                ? 'bg-accent/20 border-accent text-accent'
                : 'border-gray-700 text-gray-400 hover:border-gray-500'
            }`}
            title="Coincidir palabra completa"
          >
            |ab|
          </button>
          <button
            onClick={() => setFilters(f => ({ ...f, useRegex: !f.useRegex }))}
            className={`px-2 py-1 text-xs rounded border ${
              filters.useRegex
                ? 'bg-accent/20 border-accent text-accent'
                : 'border-gray-700 text-gray-400 hover:border-gray-500'
            }`}
            title="Usar expresión regular"
          >
            .*
          </button>
        </div>

        {/* Search Results Placeholder */}
        <div className="mt-4">
          <p className="text-gray-500 text-xs italic">
            {searchTerm
              ? `Buscando "${searchTerm}"...`
              : "Introduce un término para buscar proyectos"}
          </p>

          {/* Future project results will appear here */}
          <div className="mt-4 space-y-2">
            {/* Placeholder for future implementation */}
            {searchTerm && (
              <div className="text-gray-600 text-xs">
                <p>Próximamente: Resultados de búsqueda de proyectos</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PanelSection>
  )
}
