import React from "react";
import { motion } from "framer-motion";
import { Cpu, ScanLine, BarChart3, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "AI-Powered Recognition",
        description: [
            "Identify cattle individually",
            "Real-time image analysis",
            "High accuracy detection",
        ],
        icon: <Cpu className="w-10 h-10 text-black" />,
    },
    {
        title: "Smart Tracking",
        description: [
            "Monitor movement & activity",
            "Detect anomalies early",
            "Location-based insights",
        ],
        icon: <ScanLine className="w-10 h-10 text-black" />,
    },
    {
        title: "Data-Driven Insights",
        description: [
            "Health & growth analytics",
            "Performance dashboards",
            "Optimized farm decisions",
        ],
        icon: <BarChart3 className="w-10 h-10 text-black" />,
    },
    {
        title: "Secure & Reliable",
        description: [
            "Encrypted data handling",
            "Cloud-backed storage",
            "Scalable for all farms",
        ],
        icon: <ShieldCheck className="w-10 h-10 text-black" />,
    },
];

const Features = () => {
    return (
        <section className="bg-[url('/cow.gif')] bg-cover bg-center bg-no-repeat text-gray-100">
            <div className="px-6 py-12 backdrop-blur-sm bg-black/40">
                {/* Section header */}
                <div className="container mx-auto mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Built to Empower Modern Farming
                    </h2>
                    <p className="mt-3 text-lg text-gray-300">
                        Transforming livestock management with{" "}
                        <span className="font-semibold text-white">AI & ML</span>
                    </p>
                </div>

                {/* Features grid */}
                <div className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="cursor-pointer flex flex-col items-center p-8 bg-neutral-300 text-black rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                        >
                            {feature.icon}
                            <h3 className="mt-4 mb-2 text-xl font-bold text-center">
                                {feature.title}
                            </h3>
                            <ul className="text-gray-700 text-center space-y-1 text-sm leading-relaxed">
                                {feature.description.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
