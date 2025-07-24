// components/Header.tsx
export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white">
      <nav className="flex justify-between items-center max-w-6xl m-1 p-2">
        <img
          src="/assets/images/logo/logo.png"
          alt="Serene Hands Logo"
          className="h-10"
        />
      </nav>
    </header>
  );
}
