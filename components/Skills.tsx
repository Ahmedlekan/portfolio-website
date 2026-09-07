import { skillGroups } from "@/constants/constant";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-shell">
      <SectionTitle id="skills-title" title="Skills & technologies" description="The tools I use to provision infrastructure, deliver applications, and keep systems observable." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="surface">
            <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => <li key={skill} className="rounded-lg bg-gray-800 px-3 py-2 text-sm text-textLight">{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <a href="#project" className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-textGreen hover:underline">See these tools in my projects →</a>
    </section>
  );
}
