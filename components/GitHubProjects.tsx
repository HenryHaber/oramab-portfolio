import type { GitHubRepo } from "@/lib/github";
import { profile } from "@/data/profile";

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  PHP: "#4F5D95",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#555555",
  "C#": "#178600",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
};

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

function LanguageDot({ language }: { language: string | null }) {
  if (!language) return null;
  return (
    <span className="inline-flex items-center gap-1.5 text-[10.5px] text-muted">
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{
          backgroundColor:
            LANGUAGE_COLORS[language] ?? "var(--color-muted)",
        }}
        aria-hidden
      />
      {language}
    </span>
  );
}

export default function GitHubProjects({ repos }: { repos: GitHubRepo[] }) {
  return (
    <div>
      <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-sm border border-secondary/25 border-l-[3px] border-l-primary bg-white p-3 transition-colors hover:bg-primary/5"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="truncate text-[12px] font-bold text-primary group-hover:underline">
                {repo.name}
              </h3>
              {repo.stargazers_count > 0 && (
                <span className="shrink-0 text-[10.5px] font-medium text-muted">
                  ★ {repo.stargazers_count}
                </span>
              )}
            </div>
            <p className="mt-1 line-clamp-3 text-[11px] leading-snug text-ink">
              {repo.description ?? "No description provided."}
            </p>
            <div className="mt-2 flex items-center gap-3 text-muted">
              <LanguageDot language={repo.language} />
              <span className="text-[10.5px]">
                Updated {formatDate(repo.updated_at)}
              </span>
            </div>
          </a>
        ))}
      </div>
      {repos.length === 0 && (
        <p className="text-[11.5px] text-muted">
          No public repositories to display right now.
        </p>
      )}
      <p className="text-[10px] text-muted">
        Live from{" "}
        <a
          href={profile.links.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          github.com/{profile.githubUsername}
        </a>{" "}
        · updated at build time
      </p>
    </div>
  );
}