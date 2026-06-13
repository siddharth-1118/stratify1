export default function ProfileCard() {
    return (
        <section
            className="
                p-8
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/20
                flex
                items-center
                gap-6
            "
        >
            <div
                className="
                    w-20 h-20
                    rounded-full
                    bg-green-500
                    text-black
                    flex
                    items-center
                    justify-center
                    text-2xl
                    font-bold
                "
            >
                AS
            </div>

            <div>
                <h2 className="text-2xl font-semibold">
                    Amritansu Singh
                </h2>

                <p className="text-zinc-500">
                    amritansu@example.com
                </p>
            </div>
        </section>
    );
}