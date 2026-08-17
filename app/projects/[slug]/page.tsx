import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { companies } from "@/data/companies";
import { featuredProjects } from "@/data/projects";
import { profile } from "@/data/profile";

export const dynamic = "force-static";
export const dynamicParams = false;

interface Props {
  params: Promise<{ slug: string }>;
}

function getProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${profile.name}`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const client = project.clientCompany
    ? companies[project.clientCompany]
    : null;

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 sm:py-10">
      <main className="mx-auto max-w-[850px] rounded-sm border border-black/5 bg-paper px-6 py-9 shadow-[0_1px_3px_rgba(0,0,0,0.08)] sm:px-12 sm:py-12">
        <nav className="mb-6 text-[11px]">
          <Link
            href="/projects"
            className="font-semibold text-primary hover:underline"
          >
            ← All projects
          </Link>
          <span className="mx-2 text-muted">·</span>
          <Link
            href="/"
            className="text-muted hover:text-primary hover:underline"
          >
            Portfolio
          </Link>
        </nav>

        <h1 className="text-[20px] font-bold leading-tight tracking-tight text-primary">
          {project.title}
        </h1>
        <p className="mt-1 text-[12px] font-medium text-secondary">
          {project.role}
        </p>
        <p className="mt-2 text-[11.5px] leading-relaxed text-muted">
          {project.tagline}
        </p>

        {(client || project.website || project.repo) && (
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 rounded-sm border border-secondary/25 bg-white p-3 text-[11px]">
            {client && (
              <span className="text-muted">
                Client:{" "}
                {client.website ? (
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    {client.name}
                  </a>
                ) : (
                  <span className="font-semibold text-ink">{client.name}</span>
                )}
              </span>
            )}
            {project.website && (
              <span className="text-muted">
                Website:{" "}
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  {project.website.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              </span>
            )}
            {project.repo && (
              <span className="text-muted">
                Code:{" "}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  {project.repo.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              </span>
            )}
          </div>
        )}

        <section className="mt-6">
          <h2 className="border-b border-primary/30 pb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
            Overview
          </h2>
          <p className="mt-2 text-[11.5px] leading-relaxed text-ink">
            {project.summary}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="border-b border-primary/30 pb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
            Key Highlights
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[11.5px] leading-snug text-ink marker:text-primary/70">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="border-b border-primary/30 pb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
            Technologies
          </h2>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-sm bg-secondary/10 px-2 py-0.5 text-[10.5px] font-medium text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <p className="mt-8 text-[11px]">
          <Link
            href="/projects"
            className="font-semibold text-primary hover:underline"
          >
            ← Back to all projects
          </Link>
        </p>
      </main>

      <footer className="mx-auto mt-6 max-w-[850px] text-center text-[10.5px] text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}