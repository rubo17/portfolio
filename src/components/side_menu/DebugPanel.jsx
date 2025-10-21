import PanelSection from "@components/side_menu/PanelSection";
import { useState } from "react";

export default function DebugPanel() {
  const [selectedConfig, setSelectedConfig] = useState("Desarrollo Web");

  const debugConfigs = [
    { name: "Desarrollo Web", type: "chrome" },
    { name: "Node.js", type: "node" },
    { name: "Pruebas", type: "test" }
  ];

  const variables = [
    { name: "NODE_ENV", value: "development", scope: "Global" },
    { name: "PORT", value: "4321", scope: "Local" },
    { name: "BASE_URL", value: "/portfolio/", scope: "Local" },
  ];

  const watchExpressions = [
    { expression: "window.innerWidth", value: "1920" },
    { expression: "document.title", value: "Astro Basics" },
  ];

  return (
    <PanelSection>
      <div className="px-3">
        <h2 className="font-bold text-sm tracking-wide text-accent mb-3">EJECUTAR Y DEPURAR</h2>

        {/* Configuration Selector */}
        <div className="mb-4">
          <select
            value={selectedConfig}
            onChange={(e) => setSelectedConfig(e.target.value)}
            className="w-full bg-secondary text-primaryText px-3 py-2 text-xs rounded border border-gray-700 focus:border-accent focus:outline-none cursor-pointer"
          >
            {debugConfigs.map((config) => (
              <option key={config.name} value={config.name}>
                {config.name}
              </option>
            ))}
          </select>

          <button className="mt-2 w-full bg-green-600/20 hover:bg-green-600/30 border border-green-500 text-green-400 px-3 py-2 text-xs rounded transition font-semibold flex items-center justify-center gap-2">
            <span>▶</span>
            <span>Iniciar depuración</span>
          </button>
        </div>

        {/* Variables Section */}
        <div className="mb-4">
          <details open className="group">
            <summary className="cursor-pointer text-xs font-semibold text-gray-300 uppercase mb-2 hover:text-accent list-none flex items-center gap-1">
              <span className="group-open:rotate-90 transition-transform">▶</span>
              Variables
            </summary>
            <ul className="space-y-1 mt-2 ml-4">
              {variables.map((variable, idx) => (
                <li key={idx} className="text-xs">
                  <div className="flex items-start gap-2 py-1 px-2 hover:bg-secondary rounded">
                    <span className="text-accent font-mono">{variable.name}:</span>
                    <div className="flex-1">
                      <span className="text-orange-400">"{variable.value}"</span>
                      <span className="text-gray-500 text-xs ml-2">({variable.scope})</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </details>
        </div>

        {/* Watch Expressions */}
        <div className="mb-4">
          <details open className="group">
            <summary className="cursor-pointer text-xs font-semibold text-gray-300 uppercase mb-2 hover:text-accent list-none flex items-center gap-1">
              <span className="group-open:rotate-90 transition-transform">▶</span>
              Inspección
            </summary>
            <ul className="space-y-1 mt-2 ml-4">
              {watchExpressions.map((watch, idx) => (
                <li key={idx} className="text-xs">
                  <div className="flex items-start gap-2 py-1 px-2 hover:bg-secondary rounded">
                    <span className="text-blue-400 font-mono">{watch.expression}:</span>
                    <span className="text-orange-400">"{watch.value}"</span>
                  </div>
                </li>
              ))}
            </ul>
          </details>
        </div>

        {/* Call Stack */}
        <div className="mb-4">
          <details className="group">
            <summary className="cursor-pointer text-xs font-semibold text-gray-300 uppercase mb-2 hover:text-accent list-none flex items-center gap-1">
              <span className="group-open:rotate-90 transition-transform">▶</span>
              Pila de llamadas
            </summary>
            <div className="mt-2 ml-4 text-xs text-gray-500 italic">
              No hay sesión de depuración activa
            </div>
          </details>
        </div>

        {/* Breakpoints */}
        <div>
          <details className="group">
            <summary className="cursor-pointer text-xs font-semibold text-gray-300 uppercase mb-2 hover:text-accent list-none flex items-center gap-1">
              <span className="group-open:rotate-90 transition-transform">▶</span>
              Puntos de interrupción
            </summary>
            <div className="mt-2 ml-4">
              <button className="text-xs text-accent hover:text-accent/80 flex items-center gap-1">
                <span>+</span>
                <span>Agregar punto de interrupción</span>
              </button>
            </div>
          </details>
        </div>
      </div>
    </PanelSection>
  )
}
