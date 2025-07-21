
export default function PanelSection({ children }) {
  return (
    <section className="w-[300px] h-full bg-main z-20 shadow-lg flex flex-col">

      <div className="flex-1 overflow-y-auto text-xs pt-2 pb-4">
        {children}
      </div>
    </section>
  );
}
