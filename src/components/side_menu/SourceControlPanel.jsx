import SourceControlIcon from "@components/icons/SourceControlIcon";
import PanelSection from "@components/side_menu/PanelSection";
import { useState } from "react";

export default function SourceControlPanel() {
  const [commitMessage, setCommitMessage] = useState("");

  const changes = [
    { file: "Hero.astro", status: "M", color: "text-yellow-500" },
    { file: "Proyectos.astro", status: "M", color: "text-yellow-500" },
    { file: "Habilidades.astro", status: "M", color: "text-yellow-500" },
  ];

  const recentCommits = [
    { hash: "a7d3675", message: "change server dir", time: "hace 2 días" },
    { hash: "885ec34", message: "feat: bg-main in the body", time: "hace 3 días" },
    { hash: "e1059a2", message: "fix: hide social networs on mobile", time: "hace 5 días" },
  ];

  return (
    <PanelSection>
      <div className="px-3">
        <h2 className="font-bold text-sm tracking-wide text-accent mb-3">SOURCE CONTROL</h2>

        {/* Commit Input */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              value={commitMessage}
              onChange={(e) => setCommitMessage(e.target.value)}
              className="bg-secondary text-primaryText p-3 pr-10 w-full text-xs rounded border border-gray-700 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none transition"
              placeholder="Message (Ctrl+Enter to commit)"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <SourceControlIcon className="text-accent w-4 h-4" />
            </div>
          </div>

          <button className="mt-2 w-full bg-accent/90 hover:bg-accent/20 border border-accent text-white px-3 py-1.5 text-xs rounded transition">
            ✓ Commit
          </button>
        </div>

        {/* Changes Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-semibold text-gray-300 uppercase">Changes ({changes.length})</h3>
            <button className="text-accent hover:text-accent/80 text-xs" title="Actualizar">
              ↻
            </button>
          </div>

          <ul className="space-y-1">
            {changes.map((change, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between py-1 px-2 hover:bg-secondary rounded cursor-pointer group"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className={`font-mono text-xs font-bold ${change.color}`}>
                    {change.status}
                  </span>
                  <span className="text-xs text-gray-300 truncate">{change.file}</span>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100">
                  <button className="text-accent hover:text-accent/80 text-xs" title="Abrir cambios">
                    ⊞
                  </button>
                  <button className="text-gray-400 hover:text-gray-300 text-xs" title="Descartar cambios">
                    ↶
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PanelSection>
  )
}
