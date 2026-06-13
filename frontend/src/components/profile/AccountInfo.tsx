export default function AccountInfo() {
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
            <h2 className="text-2xl font-bold mb-6">
                Account Information
            </h2>

            <div className="space-y-5">

                <div className="flex justify-between">
                    <span className="text-zinc-500">
                        Email
                    </span>

                    <span>
                        amritansu@example.com
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-zinc-500">
                        Country
                    </span>

                    <span>
                        India
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-zinc-500">
                        Role
                    </span>

                    <span>
                        Business User
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-zinc-500">
                        Member Since
                    </span>

                    <span>
                        June 2026
                    </span>
                </div>

            </div>
        </section>
    );
}