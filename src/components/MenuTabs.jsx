import Cerrar from "@components/icons/CerrarReact";

export default function MenuTabs({ items = ["Archivo", "Editar"], activeItem = "Archivo" }) {
  return (
<nav class="w-full h-full max-h-[48px] bg-secondary border-b border-[#2A2A2A]  flex items-center">
  <ul class="flex text-sm font-medium h-full w-full">
    {items.map((item) => (
      <li class={`h-full border-t-2 border-t-accent ${activeItem === item ? "border-t-accent bg-accent/10" : "border-t-transparent"} flex items-center`}>
        <a
          href="#"
          class="group flex items-center gap-2 h-full w-full px-4"
        >
          <figure class="size-[20px]">
            <img
              alt="icon"
              src="/icons/star-icon.svg"
              
              class="w-full h-full object-contain"
            />
          </figure>
          <span class="text-primaryText text-[15px] whitespace-nowrap">
            {item}
          </span>
          <span class="opacity-0 group-hover:opacity-100 transition hover:bg-gray-700 rounded p-1"><Cerrar/></span>
        </a>
      </li>
    ))}
  </ul>
</nav>
  );
}
