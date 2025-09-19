"use client";

import React from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Image from "next/image";

const teamMembers = [
    { name: "Rajesh Kumar", role: "Founder & CEO", img: "https://source.unsplash.com/random/300x300/?person,1", bio: "Visionary leader driving innovation in smart farming solutions." },
    { name: "Priya Sharma", role: "CTO", img: "https://source.unsplash.com/random/300x300/?person,2", bio: "Expert in AI/ML with a passion for building scalable tech." },
    { name: "Amit Verma", role: "Lead Developer", img: "https://source.unsplash.com/random/300x300/?person,3", bio: "Full-stack engineer specializing in cloud-native applications." },
    { name: "Sneha Patel", role: "AI/ML Engineer", img: "https://source.unsplash.com/random/300x300/?person,4", bio: "Researcher building next-gen models for livestock health." },
    { name: "Vikram Singh", role: "DevOps Specialist", img: "https://source.unsplash.com/random/300x300/?person,5", bio: "Automation enthusiast ensuring seamless deployments." },
    { name: "Ananya Gupta", role: "UI/UX Designer", img: "https://source.unsplash.com/random/300x300/?person,6", bio: "Design thinker crafting engaging digital experiences." },
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
                                />
                                <div className="flex flex-col justify-between p-6 space-y-6">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-semibold tracking-wide">{member.name}</h2>
                                        <p className="text-sm font-medium text-gray-500">{member.role}</p>
                                        <p>{member.bio}</p>
                                    </div>
                                    <button
                                        type="button"
                                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-default-600 dark:text-gray-50"
                                    >
                                        Read more
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
