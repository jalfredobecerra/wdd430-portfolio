import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: 'StarScanner',
    description: 'StarScanner is a web application that transforms the night sky into a personal, interactive experience. Using real-time data from NASA, the International Space Station, and local weather APIs, StarScanner tells you exactly what is happening above your location tonight — from meteor shower peaks and planetary conjunctions to live ISS passes you can watch with the naked eye.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://github.com/jalfredobecerra/StarScanner'
  },
  {
    title: 'Service Network',
    description: 'A study SaaS combining spaced repetition and Pomodoro-based focus sessions, with PDF and handwritten-note upload for AI-assisted flashcard generation.',
    technologies: ['React', 'Supabase', 'Vercel', 'Supabase Edge Functions'],
    link: 'https://github.com/jalfredobecerra/cse340'
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