export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-start justify-center w-full min-h-[320px] rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg p-10 overflow-hidden mb-8">
      <div className="z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg animate-fade-in">Welcome back, John Doe! 👋</h1>
        <p className="text-lg text-white/90 mb-6 animate-fade-in">Your journey to becoming unstoppable starts now! Let’s make today productive and impactful.</p>
        <button className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-full shadow hover:bg-indigo-100 transition-all animate-bounce">Start Learning Now</button>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/0ca4eb32e6565dbf6394040f2dea5a63a89963f6?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0"
        alt="Hero background"
        className="absolute right-0 bottom-0 w-1/3 min-w-[200px] max-w-[400px] opacity-30 pointer-events-none select-none hidden md:block"
      />
    </section>
  );
}
  