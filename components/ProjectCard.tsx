interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-xl font-bold mb-2 text-gray-900">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-3">
            <span className="font-semibold text-gray-700">Technologies: </span>
            {technologies.join(", ")}
        </p>
            {link && (
                <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
            >
            View Project →
            </a>
        )}
    </article>
  );
}