export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 mt-8 border-b-2 border-primary pb-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-primary first:mt-0">
      {children}
    </h2>
  );
}