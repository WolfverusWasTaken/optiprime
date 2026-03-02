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

            {/* 1. HERO SECTION (Dynamic Triptych Collage) */}
            <section id="hero" className="w-full min-h-[85vh] relative flex flex-col items-center justify-center overflow-hidden">

                {/* 3-Panel Collage Background */}
                <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 z-0">
                    <div className="relative overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1500&auto=format&fit=crop")', clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
                        />
                        <div className="absolute inset-0 bg-navy-deep/40" />
                    </div>
                    <div className="relative overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1500&auto=format&fit=crop")', clipPath: 'polygon(15% 0, 100% 0, 85% 100%, -15% 100%)' }}
                        />
                        <div className="absolute inset-0 bg-navy-deep/50" />
                    </div>
                    <div className="relative overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1500&auto=format&fit=crop")', clipPath: 'polygon(15% 0, 100% 0, 100% 100%, -15% 100%)' }}
                        />
                        <div className="absolute inset-0 bg-navy-deep/40" />
                    </div>

                    {/* Jagged Divider Overlays */}
                    <div className="absolute top-0 left-1/3 w-8 h-full bg-navy-deep z-10 -translate-x-1/2 skew-x-[-15deg] shadow-[0_0_50px_rgba(0,0,0,0.8)] border-x border-soft-white/5" />
                    <div className="absolute top-0 left-2/3 w-8 h-full bg-navy-deep z-10 -translate-x-1/2 skew-x-[-15deg] shadow-[0_0_50px_rgba(0,0,0,0.8)] border-x border-soft-white/5" />
                </div>

                {/* Content Overlay */}
                <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-20 space-y-8">
                    <div className="space-y-4">

                        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] text-soft-white">
                            TEAM <span className="text-prime-red">OTIPRIME</span>
                        </h1>
                    </div>

                    <p className="text-lg md:text-2xl text-soft-white font-medium max-w-2xl mx-auto leading-relaxed uppercase tracking-tight opacity-80 decoration-prime-blue decoration-2">
                        We are Otiprime, sample paragraph
                    </p>

                    <div className="flex justify-center pt-8">
                        <button className="group px-10 py-4 bg-energy-red hover:bg-soft-white text-white hover:text-navy-deep font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3">
                            ACCESS PROJECTS <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-navy-deep to-transparent z-10" />
            </section>

            {/* 2. STATS/METRICS (Wireframe Grid) */}
            <section id="metrics" className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Loop placeholders */}
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-8 border border-soft-white/5 bg-gunmetal hover:border-prime-blue/30 transition-all rounded-sm group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="stat-icon-wrapper p-3 bg-soft-white/5 text-prime-blue rounded-sm">
                                    {i === 1 && <Cpu className="w-6 h-6" />}
                                    {i === 2 && <HardDrive className="w-6 h-6" />}
                                    {i === 3 && <Terminal className="w-6 h-6" />}
                                    {i === 4 && <Box className="w-6 h-6" />}
                                </div>
                                <div className="text-[10px] text-soft-white/20 uppercase tracking-widest font-bold">Team-0{i}</div>
                            </div>
                            <div className="h-10 w-32 bg-soft-white/5 animate-pulse rounded mb-2" />
                            <div className="h-4 w-24 bg-soft-white/5 animate-pulse rounded" />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
