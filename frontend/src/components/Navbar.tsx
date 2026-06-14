import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-4 md:px-8 py-6">

      <div>
        <h1 className="text-lg md:text-xl font-bold">
          Stratify
        </h1>

        <p className="hidden md:block text-sm tracking-wide text-zinc-500">
          AI Transformation Intelligence
        </p>
      </div>

      <div className="flex items-center gap-3">

        <Link
          href="/login"
          className="
            px-5
            py-2.5
            rounded-full
            border
            border-zinc-700
            hover:bg-zinc-900
            hover:border-zinc-500
            transition-all
            duration-300
          "
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="
            px-5
            py-2.5
            rounded-full
            bg-green-500
            text-black
            font-semibold
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Sign Up
        </Link>

      </div>
    </nav>
  );
}