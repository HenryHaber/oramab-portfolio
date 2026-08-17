import { profile } from "@/data/profile";

export default function FeaturedProjects() {
  return (
    <ul className="list-disc space-y-1 pl-5 text-[11.5px] leading-snug text-ink marker:text-primary/70">
      {profile.featuredProjects.map((project) => (
        <li key={project.title}>
          <span className="font-semibold">{project.title}: </span>
          {project.description}
        </li>
      ))}
    </ul>
  );
}