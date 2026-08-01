export default function ProjectResultCard({ project }) {
  const { title, description, image, link, finish } = project;
  const href = link || "#";

  return (
    <a
      href={href}
      className="group flex items-center gap-3 bg-secondary border border-skillColor rounded-xl p-2.5 cursor-pointer transition-all duration-200 hover:border-accent hover:shadow-[0_0_0_1px_rgba(127,219,255,0.3)] hover:-translate-y-0.5"
    >
      <div className="relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-main border border-skillColor">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <div className="flex items-center gap-1.5 min-w-0">
          <p className="text-primaryText font-semibold text-sm truncate group-hover:text-accent transition-colors">
            {title}
          </p>
          <span
            className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${
              finish ? "bg-green-400" : "bg-yellow-400"
            }`}
            title={finish ? "Completado" : "En progreso"}
          />
        </div>
        <p className="text-primaryText/60 text-xs truncate">{description}</p>
      </div>

      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-skillColor flex items-center justify-center group-hover:bg-accent/10 transition-colors">
        <svg
          className="w-3.5 h-3.5 text-primaryText/50 group-hover:text-accent group-hover:translate-x-0.5 transition-all"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}
