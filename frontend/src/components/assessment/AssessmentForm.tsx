"use client";

import { useState } from "react";
import SliderInput from "./SliderInput";

export default function AssessmentForm() {

    const [industry, setIndustry] = useState("");
    const [country, setCountry] = useState("");

    const [investment, setInvestment] = useState(1000000);

    const [deploymentCount, setDeploymentCount] = useState(10);

    const [trainingHours, setTrainingHours] = useState(50);

    const industries = [
        "Technology",
        "Healthcare",
        "Finance",
        "Retail",
        "Manufacturing",
    ];

    const countries = [
        "United States",
        "India",
        "Germany",
        "United Kingdom",
        "Japan",
    ];

    return (
        <div
            className="
                p-8
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/20
                space-y-8
            "
        >

            <div className="grid md:grid-cols-2 gap-6">

                {/* Industry */}
                <div>
                    <label className="block mb-2 font-medium">
                        Industry
                    </label>

                    <div className="relative">

                        <select
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            className="
                w-full
                px-4
                py-3
                pr-12
                rounded-xl
                bg-zinc-950
                border
                border-zinc-700
                appearance-none
                focus:outline-none
                focus:border-green-500
            "
                        >
                            <option value="">
                                Select Industry
                            </option>

                            {industries.map((industry) => (
                                <option
                                    key={industry}
                                    value={industry}
                                >
                                    {industry}
                                </option>
                            ))}
                        </select>

                        <span
                            className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-zinc-400
                pointer-events-none
            "
                        >
                            ▼
                        </span>

                    </div>
                </div>

                {/* Country */}
                <div>
                    <label className="block mb-2 font-medium">
                        Country
                    </label>

                    <div className="relative">

                        <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="
                w-full
                px-4
                py-3
                pr-12
                rounded-xl
                bg-zinc-950
                border
                border-zinc-700
                appearance-none
                focus:outline-none
                focus:border-green-500
            "
                        >
                            <option value="">
                                Select Country
                            </option>

                            {countries.map((country) => (
                                <option
                                    key={country}
                                    value={country}
                                >
                                    {country}
                                </option>
                            ))}
                        </select>

                        <span
                            className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-zinc-400
                pointer-events-none
            "
                        >
                            ▼
                        </span>

                    </div>
                </div>

            </div>

            <div>
                <label className="block text-lg font-medium mb-1">
                    AI Investment (USD)
                </label>

                <p className="text-sm text-zinc-500 mb-4">
                    Annual organizational investment in AI initiatives.
                </p>

                <SliderInput
                    label=""
                    value={investment}
                    setValue={setInvestment}
                    min={0}
                    max={60000000}
                    step={100000}
                    prefix="$"
                />
            </div>
            <div>
                <label className="block text-lg font-medium mb-1">
                    Deployment Count
                </label>

                <p className="text-sm text-zinc-500 mb-4">
                    Number of AI systems currently deployed across the organization.
                </p>

                <SliderInput
                    label=""
                    value={deploymentCount}
                    setValue={setDeploymentCount}
                    min={0}
                    max={80}
                />
            </div>

            <div>
                <label className="block text-lg font-medium mb-1">
                    Employee Training Hours
                </label>

                <p className="text-sm text-zinc-500 mb-4">
                    Average annual AI training hours invested in workforce readiness.
                </p>

                <SliderInput
                    label=""
                    value={trainingHours}
                    setValue={setTrainingHours}
                    min={0}
                    max={200}
                />
            </div>

            <button
                className="
                    w-full
                    bg-green-500
                    text-black
                    py-4
                    rounded-xl
                    font-semibold
                    hover:scale-[1.01]
                    transition-all
                "
            >
                Generate Strategic Assessment
            </button>

        </div>
    );
}