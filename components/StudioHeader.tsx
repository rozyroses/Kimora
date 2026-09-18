type StudioHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function StudioHeader({
  eyebrow = "KINORA",
  title,
  description,
}: StudioHeaderProps) {
  return (
    <header className="mb-10">
      <div className="mb-3 text-xs font-semibold tracking-[0.28em] text-violet-300/70">
        {eyebrow}
      </div>
      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50 sm:text-base">
        {description}
      </p>
    </header>
  );
}
