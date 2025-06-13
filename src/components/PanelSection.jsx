export default function PanelSection({ title, children }) {
  return (
    <section className="w-[220px] h-full bg-main z-20 shadow-lg flex flex-col">
      <div className="flex items-center px-3 py-2 ">
        <span className="font-bold text-sm tracking-wide text-gray-200">{title}</span>
      </div>
      <div className="flex-1 overflow-y-auto text-xs pt-2 pb-4">
        {children}
      </div>
    </section>
  );
}
