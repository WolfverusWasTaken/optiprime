"use client";

import React from "react";

// Types
interface Sponsor {
    id: string;
    name: string;
    tier: string;
    url: string;
    logoSvg: React.ReactNode;
}

export default function SponsorSection() {
    const sponsors: Sponsor[] = [
        {
            id: "incose",
            name: "INCOSE Foundation",
            tier: "SYSTEMS ENGINEERING PARTNER",
            url: "#",
            logoSvg: (
                <svg className="w-16 h-16 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 64 64" fill="currentColor">
                    {/* Abstract interlocking system rings for INCOSE */}
                    <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
                    <circle cx="24" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
                    <circle cx="40" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
                    <circle cx="32" cy="18" r="4" fill="currentColor" />
                    <circle cx="32" cy="46" r="4" fill="currentColor" />
                </svg>
            )
        },
        {
            id: "alt_tab",
            name: "ALT TAB",
            tier: "TECHNOLOGY SPONSOR",
            url: "#",
            logoSvg: (
                <svg className="w-16 h-16 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 64 64" fill="currentColor">
                    {/* Keyboard key / switch overlapping design */}
                    <rect x="12" y="16" width="28" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
                    <rect x="24" y="28" width="28" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path d="M16,22 L36,22 M28,34 L48,34" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                    <circle cx="38" cy="38" r="2" fill="currentColor" />
                    <circle cx="26" cy="26" r="2" fill="currentColor" />
                </svg>
            )
        },
        {
            id: "ilazer",
            name: "iLazer",
            tier: "MANUFACTURING SPONSOR",
            url: "#",
            logoSvg: (
                <svg className="w-16 h-16 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 64 64" fill="currentColor">
                    {/* Laser beam / precision optic design */}
                    <path d="M32,10 L32,54" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                    <path d="M22,32 L42,32" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                    <polygon points="32,24 40,40 24,40" fill="none" stroke="currentColor" strokeWidth="3" />
                    <circle cx="32" cy="10" r="4" fill="currentColor" />
                    <circle cx="32" cy="32" r="2" fill="currentColor" className="animate-pulse" />
                </svg>
            )
        }
    ];

    return (
        <section className="container mx-auto px-6 lg:px-12 relative overflow-hidden">
            <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-soft-white">
                    OUR <span className="text-prime-red">SPONSORS</span>
                </h2>
                <p className="text-light-grey/60 uppercase tracking-widest font-mono text-sm">
                    SUPPORTING AUTONOMOUS MARITIME INNOVATION
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {sponsors.map((sponsor) => (
                    <div
                        key={sponsor.id}
                        className="group flex flex-col items-center justify-center p-12 bg-gunmetal border border-soft-white/5 hover:border-prime-red/30 rounded-sm transition-all text-light-grey hover:text-white"
                    >
                        <div className="mb-4 text-medium-grey group-hover:text-prime-red transition-colors duration-300">
                            {sponsor.logoSvg}
                        </div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-center">{sponsor.name}</h3>
                        <p className="text-[10px] text-light-grey/40 uppercase tracking-widest mt-2">{sponsor.tier}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
