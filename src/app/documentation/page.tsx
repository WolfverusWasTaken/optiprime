import React from "react";
import { Cpu, Ship, Zap } from "lucide-react";

export default function DocumentationPage() {
    return (
        <div className="container mx-auto px-6 lg:px-12 py-24 space-y-24">
            <header className="space-y-4 border-b border-soft-white/10 pb-12 text-soft-white">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                    PROJECT <span className="text-prime-red">DOCUMENTATION</span>
                </h1>
                <p className="text-xl text-light-grey/60 uppercase tracking-tight max-w-2xl">
                    Complete engineering specs, blueprints, and system architectures.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-soft-white">
                {[
                    { name: "UAV", icon: Cpu },
                    { name: "USV", icon: Ship },
                    { name: "UUV", icon: Zap }
                ].map((doc, i) => (
                    <div key={i} className="p-10 border border-soft-white/5 bg-gunmetal group hover:border-prime-blue/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-soft-white/5 text-prime-blue rounded-sm group-hover:scale-110 transition-transform">
                                <doc.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-tight">{doc.name}</h3>
                        </div>
                        <div className="space-y-3 pt-4">
                            <div className="h-4 w-full bg-soft-white/5 animate-pulse rounded" />
                            <div className="h-4 w-1/2 bg-soft-white/5 animate-pulse rounded" />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
