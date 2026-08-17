import Link from "next/link";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <ul className="list-disc space-y-1 pl-5 text-[11.5px] leading-snug text-ink marker:text-primary/70">
      {featuredProjects.map((project) => (
        <li key={project.slug}>
          <Link
            href={`/projects/${project.slug}`}
            className="font-semibold text-primary hover:underline"
          >
            {project.title}
          </Link>
          : {project.tagline}{" "}
          <Link
            href={`/projects/${project.slug}`}
            className="font-semibold text-secondary hover:underline"
          >
            Details →
          </Link>
        </li>
      ))}
    </ul>
  );
}