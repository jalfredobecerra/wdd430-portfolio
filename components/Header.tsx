import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Julian Becerra</div>
        <NavLinks />
      </div>
    </header>
  );
}