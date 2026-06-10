export default function Hero() {
  return (
    <section
      className="
        relative z-10
        flex flex-col
        items-center
        justify-center
        text-center
        min-h-[65vh]
        px-4 md:px-6
      "
    >
      <p className="text-green-400 uppercase tracking-[0.25em] mb-4 text-xs sm:text-sm">
        AI Investment Intelligence
      </p>

      <h1
        className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-bold
          max-w-6xl
          leading-tight
        "
      >
        Predict AI ROI.
        <br />
        Drive Smarter Investments.
      </h1>

      <p
        className="
          mt-6
          text-zinc-400
          max-w-2xl
          text-base
          md:text-lg
        "
      >
        Analyze business outcomes, evaluate AI adoption,
        and generate executive-level strategy reports.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
          Generate Strategy
        </button>

        <button className="border border-zinc-700 px-8 py-4 rounded-full hover:bg-zinc-900 transition">
          View Demo →
        </button>
      </div>
    </section>
  );
}