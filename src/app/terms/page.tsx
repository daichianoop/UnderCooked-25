"use client";

import React from "react";
import Navbar from "@/components/Navbar";

export default function TermsAndConditionsPage() {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-start">
            <Navbar />

            <section className="bg-[url('/cow.gif')] bg-cover h-screen bg-center bg-no-repeat w-full relative">
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative px-6 py-16 max-w-5xl mx-auto text-white pt-32">
                    <h1 className="text-5xl font-extrabold mb-12 uppercase tracking-wide">
                        Terms & Conditions
                    </h1>

                    <p className="mb-4 text-gray-200 font-semibold text-lg">
                        <strong>Acceptance:</strong> By using the app, you agree to these terms & conditions, including future updates.
                    </p>

                    <p className="mb-4 text-gray-200 font-semibold text-lg">
                        <strong>User Responsibilities:</strong> Provide accurate information and use the app only for its intended purpose.
                    </p>

                    <p className="mb-4 text-gray-200 font-semibold text-lg">
                        <strong>Intellectual Property:</strong> All content, AI models, and data are owned by the Bharat Pashudhan Project. Unauthorized use is prohibited.
                    </p>

                    <p className="mb-4 text-gray-200 font-semibold text-lg">
                        <strong>Limitation of Liability:</strong> The app is provided &#39;as-is&#39;. We are not responsible for errors, misclassifications, or losses.
                    </p>

                    <p className="mb-4 text-gray-200 font-semibold text-lg">
                        <strong>Modifications:</strong> Terms may change at any time. Continued use constitutes acceptance.
                    </p>

                    <p className="mb-4 text-gray-200 font-semibold text-lg">
                        <strong>Governing Law:</strong> These terms are governed by the laws of India. Disputes will be resolved in Indian courts.
                    </p>
                </div>
            </section>
        </div>
    );
}
