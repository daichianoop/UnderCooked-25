"use client";

import React from "react";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-start">
            <Navbar />

            <section className="bg-[url('/cow.gif')] bg-cover bg-center bg-no-repeat w-full relative">
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative px-6 py-16 max-w-5xl mx-auto text-white pt-32">
                    <h1 className="text-5xl font-extrabold mb-12 uppercase tracking-wide">
                        Privacy Policy
                    </h1>

                    <p className="mb-4 text-gray-200 font-semibold text-lg">
                        <strong>Introduction:</strong> Your privacy is important to us. This policy explains how we collect, use, and protect your data.
                    </p>

                    <p className="mb-4 text-gray-200 font-semibold text-lg">
                        <strong>Information Collection:</strong> We only collect necessary data, including images of cattle and buffalo, location for context, and user notes for herd management.
                    </p>

                    <p className="mb-4 text-gray-200 font-semibold text-lg">
                        <strong>Data Usage:</strong> Collected data is used solely for AI breed identification, app functionality, and statistical insights to support farmers and government initiatives.
                    </p>

                    <p className="mb-4 text-gray-200 font-semibold text-lg">
                        <strong>Data Security:</strong> We implement robust security measures, including on-device storage and secure communication with central servers.
                    </p>

                    <p className="mb-4 text-gray-200 font-semibold text-lg">
                        <strong>User Rights:</strong> Users can access, modify, and delete their data at any time directly through the app.
                    </p>

                    <p className="mb-4 text-gray-200 font-semibold text-lg">
                        <strong>Changes:</strong> This policy may be updated periodically, and changes will be communicated within the app.
                    </p>
                </div>
            </section>
        </div>
    );
}
