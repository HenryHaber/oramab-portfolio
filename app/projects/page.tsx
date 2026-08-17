import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 sm:py-10">
      <main className="mx-auto max-w-[850px] rounded-sm border border-black/5 bg-paper px-6 py-9 shadow-[0_1px_3px_rgba(0,0,0,0.08)] sm:px-12 sm:py-12">
        <nav className="mb-6 text-[11px]">
          <Link
            href="/"
            className="font-semibold text-primary hover:underline"
          >
            ← Back to portfolio
          </Link>
        </nav>

        <h1 className="text-[22px] font-bold leading-tight tracking-tight text-primary">
          Projects
        </h1>
        <p className="mt-1 text-[12px] text-muted">
          Selected portfolio work across product delivery, architecture, and
          engineering.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>

      <footer className="mx-auto mt-6 max-w-[850px] text-center text-[10.5px] text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}