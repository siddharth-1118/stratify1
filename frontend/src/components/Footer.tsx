export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-zinc-800 py-12 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between gap-10">

                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Corporate AI Strategy Advisor
                        </h3>

                        <p className="text-zinc-400 max-w-md">
                            AI-powered platform for evaluating AI investments,
                            predicting business impact, and generating strategic
                            recommendations.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">
                            Technology Stack
                        </h4>

                        <ul className="space-y-2 text-zinc-400">
                            <li>Next.js</li>
                            <li>FastAPI</li>
                            <li>Machine Learning</li>
                            <li>Google Gemini</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">
                            Core Outputs
                        </h4>

                        <ul className="space-y-2 text-zinc-400">
                            <li>ROI Prediction</li>
                            <li>Revenue Impact</li>
                            <li>Cost Savings</li>
                            <li>Productivity Gain</li>
                            <li>AI Efficiency Score</li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
                    © 2026 Corporate AI Strategy Advisor. Built by the Web Development and AI/ML Team.
                </div>

            </div>
        </footer>
    );
}