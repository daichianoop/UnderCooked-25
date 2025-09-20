import React from "react";
import Link from "next/link";
const Hero = () => {
    return (
        <section className="px-8 font-bold font-sans absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full overflow-scroll">
            <div className="container mx-auto flex flex-col items-center text-center max-w-3xl">
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
                    Cattle Labs.
                    <span className="text-black px-4 rounded-full bg-white/90 mx-1">ML Based</span>Cattle Recognition Solution
                </h1>

                {/* Subtitle */}
                <p className="mt-6 mb-10 text-base sm:text-lg md:text-xl text-gray-300">
                    AI-powered cattle recognition for smarter livestock monitoring,
                    health tracking, and data-driven farming.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href={"/team"}>
                        <button className="px-8 py-3 text-lg font-semibold rounded bg-gray-200 text-gray-900 shadow hover:bg-gray-300 transition cursor-pointer">
                            Our Team
                        </button>
                    </Link>
                    <Link href="/vision">
                        <button className="px-8 py-3 text-lg font-semibold rounded border border-gray-400 text-gray-200 hover:border-gray-200 hover:text-white transition cursor-pointer">
                            Our Vision
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
