"use client";

import React from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Image from "next/image";

const teamMembers = [
    { name: "Biswadeep Dev", role: "Team Leader", img: "/bd.png", bio: "Visionary leader driving innovation in smart farming solutions." },
    { name: "Manya Pandey", role: "Machine Learning Core", img: "/ma.jpg", bio: "Expert in AI/ML with a passion for building scalable tech." },
    { name: "Areeb Imam", role: "App Dev Core", img: "/ai.jpg", bio: "Full-stack App Developer specializing in native applications." },
    { name: "Anoop Kumar", role: "Web Dev Core", img: "/me.jpg", bio: "Full-stack Web Developer specializing in cloud-native applications." },
    { name: "Om Sharma", role: "App Dev Core", img: "/os.jpg", bio: "App Dev enthusiast and a Multi Domain Developer." },
    { name: "Abhineet Sahay", role: "ML and Web Core", img: "/as.jpg", bio: "The Core Developer specializing in Backend and AI/ML." },
];

export default function TeamPage() {

    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-start">
            {/* NAVBAR */}
            <Navbar/>

            {/* TEAM SECTION */}
            <section className="bg-[url('/cow.gif')] bg-cover bg-center bg-no-repeat text-gray-100 w-full">
                <div className="px-6 py-16 backdrop-blur-sm bg-black/40">
                    {/* Header */}
                    <div className="container mx-auto text-center mb-12 pt-20">
                        <h1 className="text-5xl font-extrabold text-white">Meet Our Team</h1>
                        <p className="mt-4 text-lg text-gray-300">
                            The brilliant minds powering our innovation.
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="container mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                            >
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                                    width={100} height={100}
                                />
                                <div className="flex flex-col justify-between p-6 bg-black/60 space-y-6">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-semibold tracking-wide">{member.name}</h2>
                                        <p className="text-sm font-medium text-yellow-400">{member.role}</p>
                                        <p>{member.bio}</p>
                                    </div>
                                    <button
                                        type="button"
                                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-default-600 dark:text-gray-50"
                                    >

                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

