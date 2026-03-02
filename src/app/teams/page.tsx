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
            { name: "FIRST LAST", role: "ROLE" },
            { name: "FIRST LAST", role: "ROLE" },
            { name: "FIRST LAST", role: "ROLE" },
            { name: "FIRST LAST", role: "ROLE" },
        ],
    },
    {
        id: "usv",
        name: "USV TEAM",
        icon: Ship,
        members: [
            { name: "FIRST LAST", role: "ROLE" },
            { name: "FIRST LAST", role: "ROLE" },
            { name: "FIRST LAST", role: "ROLE" },
            { name: "FIRST LAST", role: "ROLE" },
        ],
    },
    {
        id: "uuv",
        name: "UUV TEAM",
        icon: Zap,
        members: [
            { name: "FIRST LAST", role: "ROLE" },
            { name: "FIRST LAST", role: "ROLE" },
            { name: "FIRST LAST", role: "ROLE" },
            { name: "FIRST LAST", role: "ROLE" },
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
            <main className="max-w-5xl mx-auto space-y-32 mb-40">
                {/* Full Team Image Placeholder */}
                <div className="w-full aspect-[21/9] bg-navy-steel border border-soft-white/5 relative overflow-hidden flex items-center justify-center group mb-16">
                    <div className="absolute inset-0 opacity-10 bg-dot-grid" />

                    <span className="text-medium-grey/20 italic text-2xl uppercase font-black tracking-[0.2em] group-hover:text-prime-blue/20 transition-colors">
                        Insert Full Team Photo Here
                    </span>
                    {/* Decorative Corners */}
                    <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-soft-white/10 group-hover:border-prime-blue/30 transition-colors" />
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-soft-white/10 group-hover:border-prime-blue/30 transition-colors" />
                </div>
                {teams.map((team) => (
                    <section
                        key={team.id}
                        id={team.id}
                        className="scroll-mt-32 space-y-12"
                    >
                        <div className="flex items-end justify-between border-b border-soft-white/10 pb-6">
                            <div className="space-y-2">
                                <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-soft-white">
                                    {team.name}
                                </h2>
                            </div>
                            <team.icon className="hidden md:block w-12 h-12 text-soft-white/5" />
                        </div>

                        {/* Photo Gallery Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            {team.members.map((member, idx) => (
                                <div
                                    key={idx}
                                    className="group relative overflow-hidden bg-gunmetal border border-soft-white/5 p-6 rounded-sm hover:border-prime-blue/50 transition-all"
                                >
                                    <div className="flex gap-6 items-center">
                                        {/* Photo Placeholder */}
                                        <div className="relative w-24 h-24 flex-shrink-0 bg-soft-white/5 border border-soft-white/10 overflow-hidden flex items-center justify-center group-hover:bg-prime-blue/10 transition-colors">
                                            <div className="absolute inset-0 opacity-10 bg-dot-grid" />
                                            <User className="w-10 h-10 text-soft-white/20 group-hover:text-prime-blue transition-colors" />
                                        </div>

                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold uppercase tracking-tight text-soft-white group-hover:text-prime-blue transition-colors">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm text-light-grey/60 uppercase tracking-wide font-medium">
                                                {member.role}
                                            </p>
                                        </div>

                                        {/* Accent Corner */}
                                        <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="absolute top-0 right-0 w-full h-[1px] bg-prime-blue" />
                                            <div className="absolute top-0 right-0 h-full w-[1px] bg-prime-blue" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>

        </div>
    );
}
