import type { Project } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    period,
    organization,
    description,
    technologies,
    imageUrl,
    liveUrl,
    sourceUrl,
  } = project;

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl ${
        imageUrl ? "md:col-span-2 md:grid md:grid-cols-[1.05fr_1fr]" : "flex flex-col"
      }`}
    >
      {imageUrl && (
        <div className="relative min-h-64 overflow-hidden bg-neutral-900 md:min-h-[26rem]">
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className={`flex flex-1 flex-col ${imageUrl ? "p-7 sm:p-9" : "p-6 sm:p-7"}`}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="font-semibold text-cyan-700">{organization}</span>
          <span className="text-neutral-500">{period}</span>
        </div>

        <h3 className={`${imageUrl ? "text-3xl" : "text-xl sm:text-2xl"} font-bold tracking-tight`}>
          {title}
        </h3>
        <p className="mt-4 leading-7 text-neutral-600">{description}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
            >
              {technology}
            </li>
          ))}
        </ul>

        {(liveUrl || sourceUrl) && (
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                View project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
            {sourceUrl && (
              <Link
                href={sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-semibold transition hover:border-neutral-900"
              >
                <Github className="h-4 w-4" />
                Source code
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
