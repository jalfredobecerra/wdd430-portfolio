interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <section className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-bold mb-3 text-gray-900">{category}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-sm bg-white border border-gray-300 rounded-full px-3 py-1 text-gray-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}