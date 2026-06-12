import Link from "next/link";
export default function DashboardNavbar() {
    return (
        <nav
            className="
                border-b
                border-zinc-800
                px-6
                md:px-10
                py-5
                flex
                justify-between
                items-center
            "
        >
            <Link href="/dashboard">
                <div className="cursor-pointer">
                    <h1 className="text-xl font-bold">
                        Stratify
                    </h1>

                    <p className="text-xs text-zinc-500">
                        AI Transformation Intelligence
                    </p>
                </div>
            </Link>

            <div className="flex items-center gap-6">

                <button className="text-zinc-400 hover:text-white transition">
                    Dashboard
                </button>

                <button className="text-zinc-400 hover:text-white transition">
                    Profile
                </button>

                <button
                    className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-zinc-700
                        hover:border-red-500
                        transition
                    "
                >
                    Logout
                </button>

            </div>
        </nav>
    );
}