export default function Navbar() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-4 md:px-8 py-6">
      <h1 className="text-lg md:text-xl font-semibold">
        Corporate AI Strategy Advisor
      </h1>

      <button className="px-4 py-2 rounded-full border border-green-500 hover:bg-green-500/10 transition">
        Get Started
      </button>
    </nav>
  );
}