export default function BackgroundGlow() {
  return (
    <div
      className="
        absolute
        top-[-150px]
        left-1/2
        -translate-x-1/2

        w-[600px]
        h-[400px]

        md:w-[900px]
        md:h-[600px]

        lg:w-[1200px]
        lg:h-[700px]

        rounded-full
        bg-gradient-to-b
        from-green-500/25
        to-transparent

        blur-[140px]
        z-0
        
      "
    />
  );
}