"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    LabelList,
} from "recharts";

export default function BenchmarkSection() {
    const benchmarkData = [
        {
            metric: "AI Adoption",
            average: 52,
            company: 63,
            top: 84,
        },
        {
            metric: "Automation",
            average: 49,
            company: 58,
            top: 81,
        },
        {
            metric: "Success Probability",
            average: 54,
            company: 61,
            top: 88,
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
            <h2 className="text-2xl font-bold mb-2">
                Industry Benchmark Analysis
            </h2>

            <p className="text-zinc-500 mb-8">
                Compare your organization's AI maturity against industry averages
                and top-performing companies.
            </p>

            <div className="w-full h-[420px] min-w-0">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <BarChart
                        data={benchmarkData}
                        margin={{
                            top: 20,
                            right: 20,
                            left: 20,
                            bottom: 20,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#27272a"
                        />

                        <XAxis
                            dataKey="metric"
                            stroke="#a1a1aa"
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            domain={[0, 100]}
                            stroke="#a1a1aa"
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            cursor={{
                                fill: "transparent",
                            }}
                            contentStyle={{
                                backgroundColor: "#18181b",
                                border: "1px solid #27272a",
                                borderRadius: "12px",
                                color: "#ffffff",
                            }}
                            labelStyle={{
                                color: "#ffffff",
                            }}
                        />

                        <Bar
                            dataKey="average"
                            name="Industry Average"
                            fill="#3b82f6"
                            radius={[6, 6, 0, 0]}

                        >
                            <LabelList
                                dataKey="average"
                                position="top"
                                fill="#ffffff"
                            />
                        </Bar>

                        <Bar
                            dataKey="company"
                            name="Your Company"
                            fill="#22c55e"
                            radius={[6, 6, 0, 0]}

                        >
                            <LabelList
                                dataKey="company"
                                position="top"
                                fill="#ffffff"
                            />
                        </Bar>

                        <Bar
                            dataKey="top"
                            name="Top Performers"
                            fill="#f59e0b"
                            radius={[6, 6, 0, 0]}

                        >
                            <LabelList
                                dataKey="top"
                                position="top"
                                fill="#ffffff"
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-8 mt-6 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-blue-500" />
                    <span className="text-blue-400">
                        Industry Average
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-500" />
                    <span className="text-green-400">
                        Your Company
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-amber-500" />
                    <span className="text-amber-400">
                        Top Performers
                    </span>
                </div>
            </div>
        </section>
    );
}