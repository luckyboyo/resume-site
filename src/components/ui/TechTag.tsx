type TechTagProps = {
  children: string;
};

export function TechTag({ children }: TechTagProps) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-600">
      {children}
    </span>
  );
}
