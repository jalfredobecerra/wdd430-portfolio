import { Project } from '@/lib/projects-db';

export default async function Projects() {
  const res = await fetch('http://localhost:3000/api/projects');
  const projects: Project[] = await res.json();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Projects Overview</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </main>
  );
}