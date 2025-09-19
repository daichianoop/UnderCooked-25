"use client";

import FaultyTerminal from "@/components/FaultyTerminal";
import CardNav from "@/components/CardNav";

export default function Home() {
    const items = [
        {
            label: "About",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Company", ariaLabel: "About Company" },
                { label: "Careers", ariaLabel: "About Careers" }
            ]
        },
        {
            label: "Projects",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "Featured", ariaLabel: "Featured Projects" },
                { label: "Case Studies", ariaLabel: "Project Case Studies" }
            ]
        },
        {
            label: "Contact",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Email", ariaLabel: "Email us" },
                { label: "Twitter", ariaLabel: "Twitter" },
                { label: "LinkedIn", ariaLabel: "LinkedIn" }
            ]
        }
    ];
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-start">
            <div style={{ width: "100%", height: "600px", position: "relative"}}>
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
                    tint="#a8f0a3"
                    mouseReact={true}
                    mouseStrength={0.4}
                    pageLoadAnimation={true}
                    brightness={0.6} className={undefined} style={undefined}>
                    <div className={"navbar "}>
                        <CardNav
                            logo={"./namelogo.png"}
                            logoAlt="Company Logo"
                            items={items}
                            baseColor="#fff"
                            menuColor="#000"
                            buttonBgColor="#111"
                            buttonTextColor="#fff"
                            ease="power3.out"
                        /></div>
                </FaultyTerminal>
            </div>

        </div>
    );
}
