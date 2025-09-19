"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";


export default function VisionPage() {

    const visionPoints = [
        {
            title: "Unrivaled Accuracy",
            description: "Delivers over 91% Top-1 accuracy using India's largest bovine image dataset. Provides Top-3 breed suggestions with confidence scores for near-perfect decisions.",
            bgColor: "#1A1A1A"
        },
        {
            title: "Lightweight & Offline-First",
            description: "Engineered for peak performance on standard mobile devices. Fully multilingual, ensuring accessibility for all users across India.",
            bgColor: "#262626"
        },
        {
            title: "Seamless Human-AI Workflow",
            description: "Smart suggestions are embedded into field worker workflows, combining AI precision with human oversight for near-perfect data entry.",
            bgColor: "#333333"
        },
        {
            title: "Dual Database Architecture",
            description: "Centralized government database for policy and secure on-device database for farmers to manage personalized herd data instantly.",
            bgColor: "#1A1A1A"
        },
        {
            title: "Context-Aware Geospatial Predictions",
            description: "Uses location data to refine breed suggestions, prioritizing breeds geographically common to the area to improve accuracy and relevance.",
            bgColor: "#262626"
        },
        {
            title: "Real-Time Insights & Alerts",
            description: "Provides instant notifications and actionable insights to field workers, ensuring timely decisions for breed registration, health tracking, and nutrition management.",
            bgColor: "#333333"
        },
    ];

    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-start">
            {/* NAVBAR */}
            <Navbar/>

            {/* VISION SECTION */}
            <section className="bg-[url('/cow.gif')] bg-cover bg-center bg-no-repeat text-gray-100 w-full">
                <div className="px-6 py-16 backdrop-blur-sm bg-black/40">
                    <div className="container mx-auto text-center mb-12 pt-20">
                        <h1 className="text-5xl font-extrabold text-white">Our Vision</h1>
                        <p className="mt-4 text-lg text-gray-300">
                            AI-driven solutions for accurate cattle and buffalo breed identification in the Bharat Pashudhan App.
                        </p>
                    </div>

                    {/* Vision Cards Grid */}
                    <div className="container mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 cursor-cell lg:grid-cols-3">
                        {visionPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className="rounded-md shadow-md p-8 mx-auto"
                                style={{ backgroundColor: point.bgColor }}
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.2, delay: 0.2 }}
                            >
                                <h2 className="text-2xl font-bold mb-4 text-white">{point.title}</h2>
                                <p className="text-gray-300">{point.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
