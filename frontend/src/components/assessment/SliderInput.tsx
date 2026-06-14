"use client";

interface SliderInputProps {
    label: string;
    value: number;
    setValue: (value: number) => void;
    min: number;
    max: number;
    step?: number;
    suffix?: string;
    prefix?: string;
}

export default function SliderInput({
    label,
    value,
    setValue,
    min,
    max,
    step = 1,
    suffix = "",
    prefix = "",
}: SliderInputProps) {
    return (
        <div className="space-y-3">

            <div className="flex gap-4 items-center">

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) =>
                        setValue(Number(e.target.value))
                    }
                    className="flex-1 accent-green-500"
                />

                <input
                    type="text"
                    value={
                        prefix
                            ? `${prefix}${value.toLocaleString("en-US")}`
                            : value.toLocaleString("en-US")
                    }
                    onChange={(e) =>
                        setValue(
                            Number(
                                e.target.value
                                    .replace(prefix, "")
                                    .replaceAll(",", "")
                            ) || 0
                        )
                    }
                    className="
                        w-44
                        px-3
                        py-2
                        rounded-xl
                        border
                        border-zinc-700
                        bg-zinc-950
                        text-center
                    "
                />

            </div>

            <div className="flex gap-4 items-center">

                <div className="flex-1">
                    <div className="flex justify-between text-sm text-zinc-400 font-medium">
                        <span>
                            {prefix}
                            {min.toLocaleString("en-US")}
                            {suffix}
                        </span>

                        <span>
                            {prefix}
                            {max.toLocaleString("en-US")}
                            {suffix}
                        </span>
                    </div>
                </div>

                <div className="w-44" />

            </div>

        </div>
    );
}