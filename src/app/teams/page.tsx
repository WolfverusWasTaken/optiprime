"use client";

import React, { useEffect, useState } from "react";
import { Cpu, Ship, Zap, User } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const teams = [
    {
        id: "uav",
        name: "UAV TEAM",
        icon: Cpu,
        members: [
            { name: "John Doe", role: "Flight Dynamics Lead" },
            { name: "Alice Smith", role: "Avionics Engineer" },
            { name: "Bob Wilson", role: "Sensor Fusion Specialist" },
            { name: "Sarah Chen", role: "GNC Lead" },
        ],
    },
    {
        id: "usv",
        name: "USV TEAM",
        icon: Ship,
        members: [
            { name: "Michael Ross", role: "Marine Systems Lead" },
            { name: "Emily Blunt", role: "Hull Design Engineer" },
            { name: "David Gray", role: "Propulsion Specialist" },
            { name: "Jessica Alba", role: "Autonomy Lead" },
        ],
    },
    {
        id: "uuv",
        name: "UUV TEAM",
        icon: Zap,
        members: [
            { name: "Tom Hardy", role: "Sub-sea Systems Lead" },
            { name: "Lara Croft", role: "Pressure Vessel Engineer" },
            { name: "Bruce Wayne", role: "Acoustics Specialist" },
            { name: "Diana Prince", role: "Deployment Lead" },
        ],
    },
];

export default function TeamsPage() {
    const [activeSection, setActiveSection] = useState("uav");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        teams.forEach((team) => {
            const element = document.getElementById(team.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container mx-auto px-6 lg:px-12 py-12 relative">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                {/* LEFT SIDEBAR - Sticky Team List */}
                <aside className="lg:sticky lg:top-32 w-full lg:w-64 space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-black uppercase tracking-tighter border-l-4 border-sit-red pl-4">
                            TEAM <span className="text-sit-red">ROSTER</span>
                        </h1>
                        <p className="text-xs text-white/40 uppercase tracking-widest font-bold">
                            Select team to view members
                        </p>
                    </div>

                    <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                        {teams.map((team) => (
                            <a
                                key={team.id}
                                href={`#${team.id}`}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-sm text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap",
                                    activeSection === team.id
                                        ? "bg-sit-red text-white scale-105 shadow-lg shadow-sit-red/20"
                                        : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                                )}
                            >
                                <team.icon className="w-4 h-4" />
                                {team.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:block pt-12 border-t border-white/5">
                        <div className="h-2 w-12 bg-sit-red mb-4" />
                        <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] leading-relaxed">
                            Personnel data for OTIPRIME systems integration.
                        </p>
                    </div>
                </aside>

                {/* RIGHT CONTENT - Scrollable Sections */}
                <main className="flex-1 space-y-32 mb-40">
                    {teams.map((team) => (
                        <section
                            key={team.id}
                            id={team.id}
                            className="scroll-mt-32 space-y-12"
                        >
                            <div className="flex items-end justify-between border-b border-white/10 pb-6">
                                <div className="space-y-2">
                                    <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter">
                                        {team.name}
                                    </h2>
                                </div>
                                <team.icon className="hidden md:block w-12 h-12 text-white/5" />
                            </div>

                            {/* Photo Gallery Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                {team.members.map((member, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative overflow-hidden bg-[#050505] border border-white/5 p-6 rounded-sm hover:border-sit-red/50 transition-all"
                                    >
                                        <div className="flex gap-6 items-center">
                                            {/* Photo Placeholder */}
                                            <div className="relative w-24 h-24 flex-shrink-0 bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center group-hover:bg-sit-red/10 transition-colors">
                                                <div className="absolute inset-0 opacity-10 bg-dot-grid" />
                                                <User className="w-10 h-10 text-white/20 group-hover:text-sit-red transition-colors" />
                                            </div>

                                            <div className="space-y-1">
                                                <div className="text-[10px] text-sit-red font-black uppercase tracking-widest mb-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                                    Personnel_ID: 00{idx + (team.id === 'usv' ? 5 : team.id === 'uuv' ? 9 : 1)}
                                                </div>
                                                <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-sit-red transition-colors">
                                                    {member.name}
                                                </h3>
                                                <p className="text-sm text-white/40 uppercase tracking-wide font-medium">
                                                    {member.role}
                                                </p>
                                            </div>

                                            {/* Accent Corner */}
                                            <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="absolute top-0 right-0 w-full h-[1px] bg-sit-red" />
                                                <div className="absolute top-0 right-0 h-full w-[1px] bg-sit-red" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </main>
            </div>
        </div>
    );
}
