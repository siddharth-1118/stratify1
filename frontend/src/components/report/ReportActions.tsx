export default function ReportActions() {
    return (
        <section
            className="
                p-8
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/20
            "
        >
            <h2 className="text-2xl font-bold mb-6">
                Next Actions
            </h2>

            <div className="flex flex-wrap gap-4">

                <button
                    className="
                        px-6
                        py-3
                        rounded-xl
                        bg-green-500
                        text-black
                        font-semibold
                    "
                >
                    Download Report
                </button>

                <button
                    className="
                        px-6
                        py-3
                        rounded-xl
                        border
                        border-zinc-700
                    "
                >
                    Start New Assessment
                </button>

                <button
                    className="
                        px-6
                        py-3
                        rounded-xl
                        border
                        border-zinc-700
                    "
                >
                    Talk To Stratify AI
                </button>

            </div>
        </section>
    );
}