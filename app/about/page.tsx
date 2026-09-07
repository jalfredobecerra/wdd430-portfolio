import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="space-y-4 text-lg text-gray-700 mb-10">
        <p>
          I'm a final-year Software Development student with a passion for building
          things that solve real problems. My work spans backend engineering,
          front-end development, and increasingly, AI integration into everyday tools.
        </p>
        <p>
          I've interned at Solvd, Inc., where I worked on test automation with
          Selenium and Java, and at EPAM Systems, where I built front-end
          features using JavaScript and Node.js. Before moving into software,
          I spent time in customer service across logistics, hardware, insurance,
          and pest control — experience that taught me how to listen closely to
          real user problems before trying to solve them with code.
        </p>
        <p>
          I see myself as a builder first. My goal is to become a founding CTO —
          someone who can take an idea from a whiteboard sketch to a working,
          scalable product. I'm currently exploring how AI can automate and
          improve everyday business operations, and building my own projects
          along the way.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <SkillCard category="Backend" skills={['Node.js', 'Java', 'APIs']} />
        <SkillCard category="Frontend" skills={['JavaScript', 'React', 'Tailwind CSS']} />
        <SkillCard category="Testing & Tools" skills={['Selenium', 'Git', 'TypeScript']} />
      </div>
    </main>
  );
}