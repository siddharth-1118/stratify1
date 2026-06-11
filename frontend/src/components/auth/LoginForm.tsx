import Link from "next/link";

export default function LoginForm() {
    return (
        <form className="space-y-6">

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
                    placeholder="Enter your password"
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

            {/* Forgot Password */}
            <div className="flex justify-end">
                <button
                    type="button"
                    className="
            text-sm
            text-zinc-400
            hover:text-green-400
            transition-colors
          "
                >
                    Forgot Password?
                </button>
            </div>

            {/* Login Button */}
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
                Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
                <div className="h-px bg-zinc-800 flex-1" />
                <span className="text-zinc-500 text-sm">
                    OR
                </span>
                <div className="h-px bg-zinc-800 flex-1" />
            </div>

            {/* Signup Link */}
            <p className="text-center text-zinc-400">
                Don't have an account?{" "}
                <Link
                    href="/signup"
                    className="text-green-400 hover:text-green-300"
                >
                    Sign Up
                </Link>
            </p>

        </form>
    );
}