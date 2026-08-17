import { profile } from "@/data/profile";

export default function Header() {
  const { links } = profile;

  return (
    <header className="text-center">
      <h1 className="text-[26px] font-bold leading-tight tracking-tight text-primary">
        {profile.name.toUpperCase()}
      </h1>
      <p className="mt-1 text-[12.5px] font-semibold text-secondary">
        {profile.title}
      </p>
      <p className="mt-2 text-[11px] text-muted">
        {profile.location} | {profile.phone} | {profile.email}
      </p>
      <p className="mt-0.5 text-[11px]">
        <a
          href={links.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted underline decoration-muted/60 hover:text-primary"
        >
          {links.github.label}
        </a>
        <span className="text-muted"> | </span>
        <a
          href={links.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted underline decoration-muted/60 hover:text-primary"
        >
          {links.linkedin.label}
        </a>
        <span className="text-muted"> | </span>
        <a
          href={links.portfolio.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted underline decoration-muted/60 hover:text-primary"
        >
          {links.portfolio.label}
        </a>
      </p>
    </header>
  );
}