export default function AssessmentHistory() {
    const assessments = [
        {
            id: 1,
            industry: "Technology",
            country: "India",
            score: 61,
        },
        {
            id: 2,
            industry: "Healthcare",
            country: "United States",
            score: 74,
        },
        {
            id: 3,
            industry: "Finance",
            country: "Germany",
            score: 68,
        },
    ];

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
                Assessment History
            </h2>

            <div className="space-y-4">

                {assessments.map((assessment) => (
                    <div
                        key={assessment.id}
                        className="
                            p-5
                            rounded-2xl
                            border
                            border-zinc-800
                            flex
                            justify-between
                            items-center
                        "
                    >
                        <div>
                            <h3 className="font-semibold">
                                Assessment #{assessment.id}
                            </h3>

                            <p className="text-zinc-500 text-sm">
                                {assessment.industry} • {assessment.country}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-green-400 font-semibold">
                                {assessment.score}%
                            </p>

                            <p className="text-zinc-500 text-sm">
                                Success Probability
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}