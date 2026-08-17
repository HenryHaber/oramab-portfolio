import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <ul className="list-disc space-y-0.5 pl-5 text-[11.5px] leading-snug text-ink marker:text-primary/70">
      {profile.skills.map((skill) => (
        <li key={skill.category}>
          <span className="font-semibold">{skill.category}: </span>
          {skill.detail}
        </li>
      ))}
    </ul>
  );
}