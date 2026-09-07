export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-4xl mx-auto text-center text-sm">
        <p>Copyright &copy; {new Date().getFullYear()} | Julian Becerra | All rights reserved</p>
      </div>
    </footer>
  );
}