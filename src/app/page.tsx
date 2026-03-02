import React from "react";
import { ArrowRight, Box, Cpu, HardDrive, LayoutGrid, Terminal } from "lucide-react";

/**
 * Homepage Template - Pitch Black & SIT Red Design
 * Uses Semantic HTML5 and Tailwind CSS utility classes.
 * Responsive design with Dashboard/Engineering aesthetic.
 */
export default function HomePage() {
    return (
        <div className="flex flex-col gap-24 lg:gap-40 pb-20">

            {/* 1. HERO SECTION (Wireframe) */}
            <section id="hero" className="container mx-auto px-6 lg:px-12 pt-12 lg:pt-24 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
                        TEAM <span className="text-sit-red">OTIPRIME</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto leading-relaxed uppercase tracking-tight">
                        We are Otiprime, sample paragraph
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-6">
                        {/* Primary Action Button */}
                        <button className="px-8 py-3.5 bg-sit-red hover:bg-sit-red/90 text-white font-bold uppercase tracking-wider rounded-sm transition-all flex items-center gap-2 group">
                            ACCESS PROJECTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. STATS/METRICS (Wireframe Grid) */}
            <section id="metrics" className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Loop placeholders */}
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-8 border border-white/5 bg-[#050505] hover:border-sit-red/30 transition-all rounded-sm group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="stat-icon-wrapper p-3 bg-white/5 text-sit-red rounded-sm">
                                    {i === 1 && <Cpu className="w-6 h-6" />}
                                    {i === 2 && <HardDrive className="w-6 h-6" />}
                                    {i === 3 && <Terminal className="w-6 h-6" />}
                                    {i === 4 && <Box className="w-6 h-6" />}
                                </div>
                                <div className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Team-0{i}</div>
                            </div>
                            <div className="h-10 w-32 bg-white/5 animate-pulse rounded mb-2" />
                            <div className="h-4 w-24 bg-white/5 animate-pulse rounded" />
                        </div>
                    ))}
                </div>
            </section>





        </div>
    );
}
