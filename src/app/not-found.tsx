"use client";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";

export default function NotFoundPage() {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-start">
            <Navbar />

            <section className="bg-[url('/cow.gif')] bg-cover bg-center bg-no-repeat w-full relative flex items-center justify-center min-h-screen">
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative flex flex-col items-center justify-center px-6 py-16 text-center text-white">
                    <h2 className="mb-8 font-extrabold text-9xl">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl mb-4">
                        Sorry, we couldn&#39;t find this page.
                    </p>
                    <p className="mb-8 text-gray-200">
                        But don&#39;t worry, you can find plenty of other things on our homepage.
                    </p>
                    <Link
                        href="/"
                        className="px-8 py-3 font-semibold rounded bg-white text-black hover:bg-gray-200 transition"
                    >
                        Back to homepage
                    </Link>
                </div>
            </section>
        </div>
    );
}
