"use client";

import FaultyTerminal from "@/components/FaultyTerminal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { LayoutTextFlipDemo } from "@/components/TextFlip";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-start">

            {/* Faulty Terminal Hero Section */}
            <div style={{ width: "100%", height: "600px", position: "relative" }}>
                <FaultyTerminal
                    scale={1.5}
                    gridMul={[2, 1]}
                    digitSize={1.2}
                    timeScale={1}
                    pause={false}
                    scanlineIntensity={0.5}
                    glitchAmount={1}
                    flickerAmount={1}
                    noiseAmp={1}
                    chromaticAberration={0}
                    dither={0.5}
                    curvature={0.18}
                    tint="#fff"
                    mouseReact={true}
                    mouseStrength={0.4}
                    pageLoadAnimation={true}
                    brightness={0.6} className={undefined} style={undefined}                >
                    <div className="navbar">
                        <Navbar />
                        <Hero />
                    </div>
                </FaultyTerminal>
            </div>

            {/* Main Content Section */}
            <div className=" flex flex-col items-center justify-center bg-black">
                <LayoutTextFlipDemo />
                <Features />
                <Footer />
            </div>

        </div>
    );
}
