import Link from "next/link";

export default function SignupForm() {
    return (
        <form className="space-y-5">

            {/* Full Name */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                >
                    Full Name
                </label>

                <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="
            w-full
            px-4
            py-3
            rounded-xl
            border
            border-zinc-700
            bg-zinc-950
            focus:outline-none
            focus:border-green-500
            transition-colors
          "
                />
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                >
                    Email Address
                </label>

                <input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="
            w-full
            px-4
            py-3
            rounded-xl
            border
            border-zinc-700
            bg-zinc-950
            focus:outline-none
            focus:border-green-500
            transition-colors
          "
                />
            </div>

            {/* Password */}
            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium mb-2"
                >
                    Password
                </label>

                <input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    className="
            w-full
            px-4
            py-3
            rounded-xl
            border
            border-zinc-700
            bg-zinc-950
            focus:outline-none
            focus:border-green-500
            transition-colors
          "
                />
            </div>

            {/* Confirm Password */}
            <div>
                <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium mb-2"
                >
                    Confirm Password
                </label>

                <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="
            w-full
            px-4
            py-3
            rounded-xl
            border
            border-zinc-700
            bg-zinc-950
            focus:outline-none
            focus:border-green-500
            transition-colors
          "
                />
            </div>

            {/* Create Account Button */}
            <button
                type="submit"
                className="
          w-full
          bg-green-500
          text-black
          py-3
          rounded-xl
          font-semibold
          hover:scale-[1.02]
          transition-all
          duration-300
        "
            >
                Create Account
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
                <div className="h-px bg-zinc-800 flex-1" />
                <span className="text-zinc-500 text-sm">
                    OR
                </span>
                <div className="h-px bg-zinc-800 flex-1" />
            </div>

            {/* Login Link */}
            <p className="text-center text-zinc-400">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="text-green-400 hover:text-green-300"
                >
                    Login
                </Link>
            </p>

        </form>
    );
}