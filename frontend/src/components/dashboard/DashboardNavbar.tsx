"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import LogoutModal from "./LogoutModal";

export default function DashboardNavbar() {
    const [showLogoutModal, setShowLogoutModal] =
        useState(false);

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");

        router.push("/login");
    };

    return (
        <>
            {showLogoutModal && (
                <LogoutModal
                    onClose={() =>
                        setShowLogoutModal(false)
                    }
                    onConfirm={handleLogout}
                />
            )}

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

                    <Link
                        href="/dashboard"
                        className="
                            text-zinc-400
                            hover:text-white
                            transition
                        "
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/profile"
                        className="
                            text-zinc-400
                            hover:text-white
                            transition
                        "
                    >
                        Profile
                    </Link>

                    <button
                        onClick={() =>
                            setShowLogoutModal(true)
                        }
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
        </>
    );
}