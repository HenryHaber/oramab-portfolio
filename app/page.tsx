import Link from "next/link";
import Header from "@/components/Header";
import SectionHeading from "@/components/SectionHeading";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import GitHubProjects from "@/components/GitHubProjects";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";
import { getOwnRepos } from "@/lib/github";

export const dynamic = "force-static";

export default async function Home() {
  let repos: Awaited<ReturnType<typeof getOwnRepos>> = [];

  try {
    repos = await getOwnRepos();
  } catch {
    repos = [];
  }

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 sm:py-10">
      <main className="mx-auto max-w-[850px] rounded-sm border border-black/5 bg-paper px-6 py-9 shadow-[0_1px_3px_rgba(0,0,0,0.08)] sm:px-12 sm:py-12">
        <Header />

        <SectionHeading>Professional Summary</SectionHeading>
        <p className="text-[11.5px] leading-relaxed text-ink">
          {profile.summary}
        </p>

        <SectionHeading>Core Competencies &amp; Technical Skills</SectionHeading>
        <Skills />

        <SectionHeading>Featured Projects</SectionHeading>
        <FeaturedProjects />
        <p className="mt-3 text-[11px]">
          <Link
            href="/projects"
            className="font-semibold text-primary hover:underline"
          >
            View all projects →
          </Link>
        </p>

        <SectionHeading>Professional Experience</SectionHeading>
        <Experience />

        <SectionHeading>GitHub Projects</SectionHeading>
        <GitHubProjects repos={repos} />

        <SectionHeading>Education &amp; Credentials</SectionHeading>
        <Education />

        <SectionHeading>Contact</SectionHeading>
        <p className="mb-4 text-[11.5px] leading-relaxed text-ink">
          Have a project, role, or collaboration in mind? Reach out — I
          typically respond within a day.
        </p>
        <ContactForm />
      </main>

      <footer className="mx-auto mt-6 max-w-[850px] text-center text-[10.5px] text-muted">
        © {new Date().getFullYear()} {profile.name} · {profile.location} ·{" "}
        <a
          href={`mailto:${profile.email}`}
          className="underline decoration-muted/60 hover:text-primary"
        >
          {profile.email}
        </a>
      </footer>
    </div>
  );
}