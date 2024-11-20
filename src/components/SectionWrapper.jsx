export default function SectionWrapper({ children }) {
  return (
    <div className="w-full flex flex-col items-center gap-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-neu-component">
      {children}
    </div>
  );
}
