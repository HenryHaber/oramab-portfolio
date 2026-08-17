import Link from "next/link";
import type { FeaturedProject } from "@/data/projects";

export default function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-sm border border-secondary/25 border-l-[3px] border-l-primary bg-white p-4 transition-colors hover:bg-primary/5"
    >
      <h3 className="text-[12px] font-bold text-primary group-hover:underline">
        {project.title}
      </h3>
      <p className="mt-1.5 flex-1 text-[11px] leading-snug text-ink">
        {project.tagline}
      </p>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-[10.5px] font-semibold text-secondary">
          {project.role}
        </span>
        <span className="shrink-0 text-[10.5px] font-medium text-muted group-hover:text-primary">
          Details →
        </span>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-sm bg-secondary/10 px-1.5 py-0.5 text-[9.5px] font-medium text-secondary"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-[9.5px] font-medium text-muted">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
    </Link>
  );
}