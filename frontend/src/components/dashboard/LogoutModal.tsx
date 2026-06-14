"use client";

interface LogoutModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

export default function LogoutModal({
    onClose,
    onConfirm,
}: LogoutModalProps) {
    return (
        <div
            className="
                fixed inset-0 z-50
                flex items-center justify-center
                bg-black/60
            "
        >
            <div
                className="
                    w-full max-w-md
                    p-8
                    rounded-3xl
                    bg-zinc-900
                    border
                    border-zinc-800
                "
            >
                <h2 className="text-2xl font-bold mb-3">
                    Logout
                </h2>

                <p className="text-zinc-400 mb-8">
                    Are you sure you want to logout?
                </p>

                <div className="flex justify-end gap-3">

                    <button
                        onClick={onClose}
                        className="
                            px-5 py-2
                            rounded-xl
                            border
                            border-zinc-700
                        "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="
                            px-5 py-2
                            rounded-xl
                            bg-red-500
                            text-white
                        "
                    >
                        Logout
                    </button>

                </div>
            </div>
        </div>
    );
}