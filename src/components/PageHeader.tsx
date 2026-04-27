type PageHeaderProps = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
};

export default function PageHeader({
  eyebrow,
  title,
  accent,
  description,
}: PageHeaderProps) {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20"
      style={{
        background:
          "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, var(--primary-light) 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 right-8 h-48 w-48 rounded-full bg-white/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-white/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
          {eyebrow}
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
          {title} <span className="text-[var(--accent)]">{accent}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
          {description}
        </p>
      </div>
    </section>
  );
}
