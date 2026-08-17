export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

interface GitHubApiRepo extends GitHubRepo {
  fork: boolean;
}

const USERNAME = "henryhaber";
const REVALIDATE_SECONDS = 86400;

const EXCLUDED_REPO_NAMES = new Set([
  "HenryHaber",
  "kloudopp-assessment",
  "Indicina-Software-engineer-assessment",
  "thelix-holding-accessment",
  "qacetech-assessment",
  "don-clem-assessment",
  "nolimitbuzz",
  "alx-system_engineering-devops",
  "alx-pre_course",
  "gatsby-starter-wordpress-blog",
  "gatsby-ecommerce-theme",
  "gatsby-starter-netlify-cms",
  "gatsby-starter-portfolio-cara",
]);

const ASSESSMENT_PATTERN = /assessment|accessment/i;

function isExcluded(repo: GitHubApiRepo): boolean {
  if (repo.fork) return true;
  if (EXCLUDED_REPO_NAMES.has(repo.name)) return true;
  if (ASSESSMENT_PATTERN.test(repo.name)) return true;
  return false;
}

export async function getOwnRepos(): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`;

  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }

  const repos: GitHubApiRepo[] = await res.json();
  return repos
    .filter((repo) => !isExcluded(repo))
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );
}
