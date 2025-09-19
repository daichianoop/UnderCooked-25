"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="py-10 bg-black text-gray-200">
            <div className="container px-6 mx-auto space-y-8 divide-y divide-gray-700">
                {/* Top section with logo + description */}
                <div className="grid grid-cols-12 gap-8">
                    {/* Logo & Branding */}
                    <div className="col-span-full md:col-span-6 flex flex-col items-center md:items-start">
                        <a
                            href="#"
                            className="flex items-center space-x-3"
                            rel="noopener noreferrer"
                        >
                            <div className="w-72 bg-neutral-300 h-20 relative">
                                <Image
                                    src="/namelogo.png"
                                    alt="Cattle Labs Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </a>
                        <p className="mt-6 max-w-lg text-left md:text-left text-base leading-relaxed mb-5 text-gray-300 font-medium">
                            <span className="text-white text-2xl font-bold">Cattle Labs</span>{" "}
                            is transforming livestock management with{" "}
                            <span className="text-white">AI-powered recognition</span>,{" "}
                            <span className="text-white">real-time tracking</span>, and{" "}
                            <span className="text-white">data-driven insights</span>. Built as
                            an extension to the{" "}
                            <span className="text-white">Bharat Pashudhan App</span>, our
                            platform ensures smarter, healthier, and more efficient farming.
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="col-span-6 md:col-span-3 text-center md:text-left">
                        <p className="pb-3 text-lg font-semibold text-white">Quick Links</p>
                        <ul className="space-y-2">
                            <li>
                                <a href="/docs" className="hover:text-white">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="hover:text-white">
                                    Usage Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="hover:text-white">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="/others" className="hover:text-white">
                                    Others
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-6 md:col-span-3 text-center md:text-left">
                        <p className="pb-3 text-lg font-semibold text-white">Company</p>
                        <ul className="space-y-2">
                            <li>
                                <a href="/team" className="hover:text-white">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="/vision" className="hover:text-white">
                                    Vision
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/CattleLabs-by-UnderCooked-OGs"
                                    className="hover:text-white"
                                >
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-6">
                    <div className="text-sm text-gray-400 text-center md:text-left">
                        ©2025 Cattle Labs. All rights reserved.
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="/privacy" className="hover:text-white text-sm">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="hover:text-white text-sm">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
