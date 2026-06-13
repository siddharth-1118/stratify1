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

import { AssessmentReport } from "@/types/report";

interface Props {
    data: AssessmentReport;
}

export default function ReadinessChart({ data }: Props) {
    const chartData = [
        {
            metric: "Adoption",
            value: data.metrics.aiAdoptionLevel,
        },
        {
            metric: "Automation",
            value: data.metrics.automationRate,
        },
        {
            metric: "Maturity",
            value: data.metrics.aiMaturity * 10,
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
                AI Readiness Breakdown
            </h2>

            <p className="text-zinc-500 mb-8">
                Core readiness indicators used to assess AI transformation capability.
            </p>

            <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#27272a"
                        />

                        <XAxis
                            dataKey="metric"
                            stroke="#a1a1aa"
                        />

                        <YAxis
                            domain={[0, 100]}
                            stroke="#a1a1aa"
                        />

                        <Tooltip
                            formatter={(value) => `${value}%`}
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
                            dataKey="value"
                            name="Score"
                            fill="#22c55e"
                            radius={[8, 8, 0, 0]}
                        >
                            <LabelList
                                dataKey="value"
                                position="top"
                                formatter={(value) => `${value}%`}
                                fill="#ffffff"
                            />
                        </Bar>

                    </BarChart>
                </ResponsiveContainer>
            </div>

        </section>
    );
}