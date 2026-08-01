import PanelSection from "@components/side_menu/PanelSection";
import ProjectResultCard from "@components/side_menu/ProjectResultCard";
import { projects } from "@data/projects.js";
import { useMemo, useState } from "react";

const normalize = (text) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function SearchPanel() {
  const [searchTerm, setSearchTerm] = useState("");

  const results = useMemo(() => {
    const term = normalize(searchTerm.trim());
    if (!term) return [];

    return projects.filter((project) => {
      const haystack = normalize(
        [project.title, project.description, ...(project.icons ?? [])].join(" ")
      );
      return haystack.includes(term);
    });
  }, [searchTerm]);

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

        {/* Search Results */}
        <div className="mt-4">
          {!searchTerm.trim() && (
            <p className="text-gray-500 text-xs italic">
              Introduce un término para buscar proyectos
            </p>
          )}

          {searchTerm.trim() && (
            <p className="text-gray-500 text-xs mb-2">
              {results.length > 0
                ? `${results.length} resultado${results.length === 1 ? "" : "s"} para "${searchTerm}"`
                : `Sin resultados para "${searchTerm}"`}
            </p>
          )}

          {results.length > 0 && (
            <div className="flex flex-col gap-2">
              {results.map((project) => (
                <ProjectResultCard key={project.title} project={project} />
              ))}
            </div>
          )}

          {searchTerm.trim() && results.length === 0 && (
            <p className="text-gray-600 text-xs">
              Prueba con otro nombre de proyecto o tecnología.
            </p>
          )}
        </div>
      </div>
    </PanelSection>
  );
}
