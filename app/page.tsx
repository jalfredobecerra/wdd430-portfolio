import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: 'StarScanner',
    description: 'A community-driven pet reunification app that helps reconnect lost pets with their owners, built as a real-world emergency response tool with offline support.',
    technologies: ['React', 'Supabase', 'Leaflet/OpenStreetMap', 'IndexedDB'],
    link: 'https://github.com/jalfredobecerra/StarScanner'
  },
  {
    title: '5 Rs Study App',
    description: 'A study SaaS combining spaced repetition and Pomodoro-based focus sessions, with PDF and handwritten-note upload for AI-assisted flashcard generation.',
    technologies: ['React', 'Supabase', 'Vercel', 'Supabase Edge Functions'],
    link: 'https://github.com/jalfredobecerra/study-app-5rs'
  }
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I'm a final-year software development student building toward a future as a founding CTO. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}