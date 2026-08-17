import { profile } from "@/data/profile";

export default function Education() {
  return (
    <ul className="list-disc space-y-0.5 pl-5 text-[11.5px] leading-snug text-ink marker:text-primary/70">
      {profile.education.map((item) => (
        <li key={item.degree}>
          <span className="font-semibold">{item.degree}</span>
          <span className="text-muted">
            {" "}
            | {item.school}
            {item.dates ? ` (${item.dates})` : ""}
          </span>
        </li>
      ))}
    </ul>
  );
}