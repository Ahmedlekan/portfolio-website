"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/constants/constant";
import RightSide from "./Right";

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const sections = navLinks.map(({ href }) => document.querySelector(href));
      let current = "#home";
      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= 140) {
          current = navLinks[index].href;
        }
      });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
        current = "#contact";
      }
      setActive(current);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();
    return () => {
      document.body.style.overflow = previous;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  const links = (mobile = false) => navLinks.map(({ href, label }) => (
    <li key={href}>
      <a href={href} aria-current={active === href ? "location" : undefined}
        onClick={() => {
          setActive(href);
          if (mobile) dialogRef.current?.close();
        }}
        className={"inline-flex min-h-11 items-center rounded px-2 text-sm font-medium transition-colors hover:text-textGreen " +
          (active === href ? "text-textGreen" : "text-textLight")}>
        {label}
      </a>
    </li>
  ));

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-bodyColor/95 backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto flex h-20 max-w-containerSmall items-center justify-between gap-4 px-6">
        <a href="#home" aria-label="Ahmed, home" className="text-2xl font-bold text-textGreen">Ahmed<span aria-hidden="true">.</span></a>
        <ul className="hidden items-center gap-3 mdl:flex">{links()}</ul>
        <button type="button" aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-navigation"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-gray-700 px-3 text-textGreen mdl:hidden"
          onClick={() => {
            dialogRef.current?.showModal();
            setOpen(true);
          }}>
          Menu
        </button>
      </nav>
      <dialog id="mobile-navigation" ref={dialogRef} aria-labelledby="mobile-menu-title"
        onClose={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 text-textLight backdrop:bg-black/60">
        <div className="ml-auto flex h-full w-[min(88vw,24rem)] flex-col gap-6 overflow-y-auto bg-bodyColor p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 id="mobile-menu-title" className="text-lg font-semibold">Navigation</h2>
            <button type="button" autoFocus onClick={() => dialogRef.current?.close()}
              className="min-h-11 rounded-lg border border-gray-700 px-4 text-textGreen">Close</button>
          </div>
          <nav aria-label="Mobile navigation"><ul className="flex flex-col gap-3">{links(true)}</ul></nav>
          <RightSide />
        </div>
      </dialog>
    </header>
  );
}
