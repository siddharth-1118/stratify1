import { AssessmentReport } from "@/types/report";

interface Props {
    data: AssessmentReport;
}

export default function ExecutiveSnapshot({ data }: Props) {
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>
                    <p className="text-green-400 font-medium mb-2">
                        AI Transformation Assessment
                    </p>

                    <h1 className="text-4xl font-bold mb-3">
                        Strategic Assessment Report
                    </h1>

                    <p className="text-zinc-400">
                        {data.company.industry} • {data.company.country}
                    </p>
                </div>

                <div className="flex gap-4">

                    <div
                        className="
                            px-6
                            py-4
                            rounded-2xl
                            bg-zinc-800/50
                            border
                            border-zinc-700
                        "
                    >
                        <p className="text-zinc-400 text-sm">
                            Success Probability
                        </p>

                        <h2 className="text-3xl font-bold text-green-400">
                            {data.metrics.successProbability}%
                        </h2>
                    </div>

                    <div
                        className="
                            px-6
                            py-4
                            rounded-2xl
                            bg-zinc-800/50
                            border
                            border-zinc-700
                        "
                    >
                        <p className="text-zinc-400 text-sm">
                            AI Maturity
                        </p>

                        <h2 className="text-3xl font-bold text-green-400">
                            {data.metrics.aiMaturity}/10
                        </h2>
                    </div>

                </div>

            </div>
        </section>
    );
}