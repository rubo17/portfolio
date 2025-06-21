import Cerrar from "@components/icons/CerrarReact";

export default function MenuTabs({ items = ["Archivo", "Editar"], activeItem = "Archivo" }) {
  return (
    <nav className="w-full max-h-[56px] bg-secondary border-b border-[#2A2A2A] flex items-center">
      <ul className="flex text-sm font-medium h-12 w-full">
        {items.map((item) => (
          <li
            className={`h-full border-t-2 ${activeItem === item ? "border-t-accent bg-accent/10" : "border-t-transparent"} flex items-center`}
          >
            <a
              href="#"
              className="group flex items-center gap-2 h-full w-full px-4"
            >
              <figure className="size-[20px]">
                <img
                  alt="icon"
                  src="/icons/star-icon.svg"
                  className="w-full h-full object-contain"
                />
              </figure>
              <span className="text-primaryText text-[15px] whitespace-nowrap">
                {item}
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition hover:bg-gray-700 rounded p-1"><Cerrar/></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
