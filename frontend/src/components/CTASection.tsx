export default function CTASection() {
    return (
        <section className="relative z-10 py-32 px-4">
            <div
                className="
          max-w-6xl
          mx-auto
          rounded-[40px]
          border
          border-zinc-800
          bg-zinc-900/30
          backdrop-blur-md
          p-10
          md:p-16
          text-center
        "
            >
                <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-4">
                    Ready To Begin?
                </p>

                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    Transform Your AI
                    <br />
                    Investment Strategy
                </h2>

                <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
                    Predict business outcomes, evaluate investment efficiency,
                    and generate executive-ready AI strategy reports in minutes.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        className="
              bg-green-500
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              hover:scale-105
              transition
            "
                    >
                        Generate Strategy
                    </button>

                    <button
                        className="
              border
              border-zinc-700
              px-8
              py-4
              rounded-full
              hover:bg-zinc-800
              transition
            "
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}