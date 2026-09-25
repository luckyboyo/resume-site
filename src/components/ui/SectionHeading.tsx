type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className="max-w-3xl">
      <p className={`font-mono text-xs font-semibold tracking-[0.2em] uppercase ${isDark ? "text-cyan-300" : "text-blue-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl ${isDark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 sm:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
