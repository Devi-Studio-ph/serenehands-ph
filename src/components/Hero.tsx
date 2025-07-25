// components/Hero.tsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="mt-[70px] relative m-1 p-2 rounded-[20px] overflow-hidden flex items-center justify-center h-[100vh] text-white bg-gradient-to-br from-green-100 via-emerald-200 to-emerald-400 dark:from-neutral-900 dark:via-emerald-900 dark:to-emerald-700 transition-colors"
    >
      {/* Clipped background image */}
      <div className="absolute inset-0 bg-[url('/assets/images/hero/hero_background.png')] bg-cover bg-center"></div>

      <div className="relative z-10 max-w-3xl text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white drop-shadow-md font-limelight">
          Relax at Home with Serene Hands
        </h1>
        {/* <p className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-200">
          Relax. Rejuvenate. Restore.
        </p> */}
        <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
          We bring professional massage therapy to the comfort of your own home. 
          Personalized, affordable, and always relaxing.
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 me-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-[10px] shadow-lg transition"
        >
          Book Now
        </a>
        <a
          href="#services"
          className="inline-block mt-8 border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium py-3 px-6 rounded-[10px] transition"
        >
          Services
        </a>

      </div>
    </section>

  );
}
