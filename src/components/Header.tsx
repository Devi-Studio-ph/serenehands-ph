// components/Header.tsx
export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <h1 className="text-xl font-bold">Serene Hands</h1>
        {/* <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#benefits" className="hover:text-blue-500">
              Benefits
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}
