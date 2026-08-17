import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <div className="space-y-4">
      {profile.experience.map((job) => (
        <section key={`${job.company}-${job.title}`}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-[12px] font-bold text-primary">
              {job.company}
              <span className="ml-1.5 font-normal text-muted">
                {job.location}
              </span>
            </h3>
            <span className="text-[10.5px] font-semibold text-muted">
              {job.dates}
            </span>
          </div>
          <p className="text-[11.5px] font-semibold text-secondary">
            {job.title}
          </p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-[11.5px] leading-snug text-ink marker:text-primary/70">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}