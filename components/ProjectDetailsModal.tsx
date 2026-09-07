"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "@/constants/constant";

interface Props {
  project: Project;
  open: boolean;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      triggerRef.current = document.activeElement as HTMLElement;
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function handleClose() {
    if (dialogRef.current?.open) dialogRef.current.close();
    onClose();
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  const dialogId = `project-dialog-title-${project.title.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <dialog ref={dialogRef} onClose={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) handleClose(); }}
      aria-labelledby={dialogId}
      className="max-h-[90vh] w-[min(92vw,900px)] rounded-xl border border-gray-700 bg-bodyColor p-0 text-textLight backdrop:bg-black/70">
      <div className="max-h-[90vh] overflow-y-auto p-6 md:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            {project.focus && <p className="text-xs font-semibold uppercase tracking-wide text-textGreen">{project.focus}</p>}
            <h2 id={dialogId} className="mt-2 text-2xl font-bold text-white">{project.title}</h2>
          </div>
          <button type="button" autoFocus onClick={handleClose} className="min-h-11 shrink-0 rounded-lg border border-gray-700 px-4 text-textGreen hover:bg-hoverColor">Close</button>
        </div>
        <p className="leading-relaxed text-textDark">{project.description}</p>
        {project.architectureImage && <figure className="mt-8">
          <Image src={project.architectureImage} alt={project.architectureImageAlt || `${project.title} architecture`} width={1536} height={1024} className="h-auto w-full rounded-lg border border-gray-700" />
          <figcaption className="mt-2 text-sm text-textDark">Architecture overview for {project.title}.</figcaption>
        </figure>}
        {project.details && <div className="mt-8 space-y-6">
          {project.details.map((detail) => <section key={detail.title}><h3 className="text-lg font-semibold text-white">{detail.title}</h3><p className="mt-2 leading-relaxed text-textDark">{detail.description}</p></section>)}
        </div>}
        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="button-primary mt-8">View project on GitHub<span className="sr-only"> (opens in a new tab)</span></a>
      </div>
    </dialog>
  );
}
