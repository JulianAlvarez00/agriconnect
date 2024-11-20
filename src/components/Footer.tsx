export function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} AgroTalent - Conectando el campo argentino
        </p>
      </div>
    </footer>
  );
}