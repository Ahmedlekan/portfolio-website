"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/constants/constant";
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function ProjectCard({ title, description, techStack, focus, details, architectureImage, architectureImageAlt, links }: Project) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <article className="surface flex h-full min-w-0 flex-col transition-colors hover:border-textGreen/50">
      {focus && <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-textGreen">{focus}</p>}
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 leading-relaxed text-textDark">{description}</p>
      <ul aria-label={title + " technologies"} className="my-6 flex flex-wrap gap-2">
        {techStack.slice(0, 5).map((tech) => <li key={tech} className="rounded-full bg-gray-800 px-3 py-1.5 text-xs text-gray-200">{tech}</li>)}
      </ul>
      {(details || techStack.length > 5) && <button type="button" onClick={() => setDetailsOpen(true)} aria-haspopup="dialog" className="mb-6 border-t border-gray-700 pt-4 text-left text-sm font-medium text-textGreen hover:underline">View technical details →</button>}
      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-gray-700 pt-4">
        <a href={links.github} target="_blank" rel="noopener noreferrer"
          aria-label={"View " + title + " source code on GitHub (opens in a new tab)"}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-textGreen hover:underline">
          <FaGithub aria-hidden="true" /> Source code
        </a>
      </div>
      <ProjectDetailsModal project={{ title, description, techStack, focus, details, architectureImage, architectureImageAlt, links }} open={detailsOpen} onClose={() => setDetailsOpen(false)} />
    </article>
  );
}
