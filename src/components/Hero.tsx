// components/Hero.tsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center text-white text-center px-6"
    >
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Relax. Rejuvenate. Restore.
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Experience professional massage therapy with Serenity Hands.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
}
