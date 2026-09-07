interface Props {
  title: string;
  id?: string;
  description?: string;
}

export default function SectionTitle({ title, id, description }: Props) {
  return (
    <div className="mb-8">
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-3 max-w-containerxs leading-relaxed text-textDark">{description}</p>}
    </div>
  );
}
