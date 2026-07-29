type SectionContainerProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};

export function SectionContainer({ id, title, children }: SectionContainerProps) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2 id={id ? `${id}-title` : undefined} className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
