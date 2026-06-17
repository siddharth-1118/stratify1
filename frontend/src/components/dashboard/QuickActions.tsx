import Link from "next/link";

export default function QuickActions() {
    return (
        <section className="mb-12">

            <div className="grid gap-6">

                <Link
                    href="/assessment"
                    className="
                        p-8
                        rounded-3xl
                        border
                        border-green-500/30
                        bg-green-500/5
                        hover:border-green-500
                        transition-all
                    "
                >
                    <h3 className="text-2xl font-semibold mb-3">
                        Start New Assessment
                    </h3>

                    <p className="text-zinc-400">
                        Evaluate a new AI initiative and generate
                        strategic recommendations.
                    </p>
                </Link>



            </div>

        </section>
    );
}