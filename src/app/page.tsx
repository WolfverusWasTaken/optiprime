"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Cpu, Ship, Zap, User, Target, Compass } from "lucide-react";
import SponsorSection from "@/components/Sponsors";

const products = [
    {
        id: "uav",
        name: "UAV",
        fullname: "UNMANNED AERIAL VEHICLE",
        description: "Autonomous drone systems designed for aerial surveillance, reconnaissance, and rapid response in maritime environments.",
        icon: Cpu,
        bgImage: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1500&auto=format&fit=crop"
    },
    {
        id: "usv",
        name: "USV",
        fullname: "UNMANNED SURFACE VEHICLE",
        description: "High-speed autonomous surface vessels capable of autonomous navigation, obstacle avoidance, and payload delivery.",
        icon: Ship,
        bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1500&auto=format&fit=crop"
    },
    {
        id: "uuv",
        name: "UUV",
        fullname: "UNMANNED UNDERWATER VEHICLE",
        description: "Subsurface robotics systems engineered for deep-sea mapping, acoustic telemetry, and underwater intervention.",
        icon: Zap,
        bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1500&auto=format&fit=crop"
    }
];

const teams = [
    {
        id: "team-uav",
        name: "UAV TEAM",
        icon: Cpu,
        members: [
            { name: "JOHN DOE", role: "AEROSPACE ENGINEER" },
            { name: "JANE SMITH", role: "FLIGHT DYNAMICS" },
            { name: "ALEX WONG", role: "COMPUTER VISION" },
            { name: "SARAH CONNOR", role: "PAYLOAD SPECIALIST" },
        ],
    },
    {
        id: "team-usv",
        name: "USV TEAM",
        icon: Ship,
        members: [
            { name: "MIKE CHEN", role: "NAVAL ARCHITECT" },
            { name: "EMILY DAVIS", role: "PROPULSION LEAD" },
            { name: "DAVID KIM", role: "AUTONOMY SOFTWARE" },
            { name: "CHLOE ZHAO", role: "SYSTEMS INTEGRATION" },
        ],
    },
    {
        id: "team-uuv",
        name: "UUV TEAM",
        icon: Zap,
        members: [
            { name: "ROBERT FOX", role: "SUBSEA ENGINEER" },
            { name: "ALICE JOHNSON", role: "ACOUSTICS SPECIALIST" },
            { name: "TOM HARDY", role: "HYDRODYNAMICS" },
            { name: "NINA WILLIAMS", role: "EMBEDDED SYSTEMS" },
        ],
    },
];

export default function HomePage() {
    return (
        <div className="flex flex-col gap-24 lg:gap-40 pb-20">

            {/* 1. FRONT PAGE / HERO */}
            <section id="home" className="w-full min-h-[90vh] relative flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
                        <div className="relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1500&auto=format&fit=crop")', clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }} />
                            <div className="absolute inset-0 bg-pure-black/90" />
                        </div>
                        <div className="relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1500&auto=format&fit=crop")', clipPath: 'polygon(15% 0, 100% 0, 85% 100%, -15% 100%)' }} />
                            <div className="absolute inset-0 bg-pure-black/90" />
                        </div>
                        <div className="relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1500&auto=format&fit=crop")', clipPath: 'polygon(15% 0, 100% 0, 100% 100%, -15% 100%)' }} />
                            <div className="absolute inset-0 bg-pure-black/90" />
                        </div>
                        
                        {/* Jagged Divider Overlays */}
                        <div className="absolute top-0 left-1/3 w-8 h-full bg-pure-black z-10 -translate-x-1/2 skew-x-[-15deg] border-x border-soft-white/5 opacity-50" />
                        <div className="absolute top-0 left-2/3 w-8 h-full bg-pure-black z-10 -translate-x-1/2 skew-x-[-15deg] border-x border-soft-white/5 opacity-50" />
                    </div>
                    
                    <div className="absolute inset-0 bg-dot-grid opacity-20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-prime-red/10 rounded-full blur-[120px] pointer-events-none" />
                </div>

                <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-20 space-y-8">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none glow-red">
                        TEAM <span className="text-white">OPTI</span><span className="text-prime-red">PRIME</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-soft-white font-medium max-w-3xl mx-auto leading-relaxed uppercase tracking-tight opacity-80 decoration-prime-red decoration-2">
                        Engineering the future of maritime robotics. We build fully autonomous platforms for RobotX.
                    </p>

                    <div className="flex justify-center pt-8">
                        <a href="#products" className="group px-10 py-4 bg-energy-red hover:bg-soft-white text-white hover:text-pure-black font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3">
                            EXPLORE FLEET <ArrowRight className="w-5 h-5 group-hover:translate-y-1 transition-transform rotate-90 group-hover:rotate-90" />
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-pure-black to-transparent z-10" />
            </section>

            {/* 2. OUR PRODUCTS */}
            <section id="products" className="container mx-auto px-6 lg:px-12 scroll-mt-32">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-soft-white">
                        OUR <span className="text-prime-red">PRODUCTS</span>
                    </h2>
                    <p className="text-light-grey/60 uppercase tracking-widest font-mono text-sm">
                        THE TRIAD OF AUTONOMOUS MARITIME DOMINANCE
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative overflow-hidden bg-gunmetal border border-soft-white/10 hover:border-prime-red/50 transition-all rounded-sm min-h-[400px] flex flex-col justify-end p-8">
                            <div className="absolute inset-0 z-0">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                                    style={{ backgroundImage: `url("${product.bgImage}")` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-pure-black/80 to-transparent" />
                            </div>

                            <div className="relative z-10 space-y-4 transform transition-transform duration-500 group-hover:-translate-y-4">
                                <product.icon className="w-12 h-12 text-prime-red opacity-80 group-hover:opacity-100 group-hover:animate-pulse" />
                                <div>
                                    <h3 className="text-4xl font-black text-soft-white uppercase tracking-widest glow-red">{product.name}</h3>
                                    <p className="text-prime-red font-mono text-xs tracking-widest font-bold mb-4">{product.fullname}</p>
                                    <p className="text-light-grey/80 text-sm leading-relaxed uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-prime-red opacity-0 group-hover:opacity-100 transition-opacity m-4" />
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. THE TEAM */}
            <section id="team" className="container mx-auto px-6 lg:px-12 scroll-mt-32">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-soft-white">
                        THE <span className="text-prime-red">TEAM</span>
                    </h2>
                    <p className="text-light-grey/60 uppercase tracking-widest font-mono text-sm">
                        THE MINDS BEHIND THE MACHINES
                    </p>
                </div>

                <div className="space-y-24">
                    {teams.map((team) => (
                        <div key={team.id} className="space-y-10">
                            <div className="flex items-center gap-4 border-b border-soft-white/10 pb-4">
                                <team.icon className="w-8 h-8 text-prime-red" />
                                <h3 className="text-3xl font-black uppercase tracking-tighter text-soft-white">{team.name}</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {team.members.map((member, idx) => (
                                    <div key={idx} className="group relative bg-dark-gray border border-soft-white/5 p-6 rounded-sm hover:border-prime-red/30 transition-all">
                                        <div className="flex flex-col items-center text-center gap-4">
                                            <div className="relative w-20 h-20 bg-pure-black border border-soft-white/10 rounded-full flex items-center justify-center group-hover:border-prime-red/50 transition-colors overflow-hidden">
                                                <div className="absolute inset-0 bg-dot-grid opacity-20" />
                                                <User className="w-8 h-8 text-medium-grey group-hover:text-prime-red transition-colors relative z-10" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold uppercase tracking-tight text-soft-white group-hover:text-prime-red transition-colors">{member.name}</h4>
                                                <p className="text-xs text-light-grey/60 uppercase tracking-widest font-mono mt-1">{member.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. VISION & MISSION */}
            <section id="vision-mission" className="container mx-auto px-6 lg:px-12 scroll-mt-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-dark-gray border border-soft-white/10 p-12 rounded-sm relative overflow-hidden group hover:border-prime-red/30 transition-all">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Target className="w-32 h-32 text-soft-white" />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-prime-red/10 text-prime-red rounded-sm">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-soft-white">OUR MISSION</h2>
                            </div>
                            <p className="text-light-grey/80 leading-relaxed uppercase tracking-wide text-sm font-medium">
                                To engineer robust, autonomous maritime systems that push the boundaries of robotics. We aim to excel in the RobotX challenge by integrating cutting-edge AI, innovative propulsion, and seamless communication across aerial, surface, and sub-surface domains.
                            </p>
                        </div>
                    </div>

                    <div className="bg-dark-gray border border-soft-white/10 p-12 rounded-sm relative overflow-hidden group hover:border-prime-red/30 transition-all">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Compass className="w-32 h-32 text-soft-white" />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-prime-red/10 text-prime-red rounded-sm">
                                    <Compass className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-soft-white">OUR VISION</h2>
                            </div>
                            <p className="text-light-grey/80 leading-relaxed uppercase tracking-wide text-sm font-medium">
                                To be the premier collegiate maritime robotics team, shaping the future of unmanned systems. We envision a world where autonomous fleets operate safely and efficiently, performing complex operations in the most demanding ocean environments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SPONSORS SECTION */}
            <div className="scroll-mt-32" id="sponsor">
                <SponsorSection />
            </div>

        </div>
    );
}
