export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-zinc-800 py-16 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="grid md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Stratify
                        </h3>

                        <p className="text-zinc-400 leading-relaxed max-w-md">
                            AI transformation advisory platform helping
                            organizations evaluate, benchmark, and improve
                            AI adoption outcomes through predictive analytics
                            and strategic guidance.
                        </p>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="font-semibold mb-4 text-green-400 uppercase tracking-wider text-sm">
                            Platform
                        </h4>

                        <ul className="space-y-3 text-zinc-400">
                            <li>Assessment</li>
                            <li>Benchmarking</li>
                            <li>Progress Tracking</li>
                            <li>Roadmaps</li>
                            <li>Executive Reports</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-4 text-green-400 uppercase tracking-wider text-sm">
                            Company
                        </h4>

                        <ul className="space-y-3 text-zinc-400">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
                    © 2026 Stratify. All rights reserved.
                </div>

            </div>
        </footer>
    );
}