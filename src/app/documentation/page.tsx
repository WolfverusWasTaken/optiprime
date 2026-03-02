import React from "react";
import { Cpu, Ship, Zap } from "lucide-react";

export default function DocumentationPage() {
    return (
        <div className="container mx-auto px-6 lg:px-12 py-24 space-y-24">
            <header className="space-y-4 border-b border-white/10 pb-12">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                    PROJECT <span className="text-sit-red">DOCUMENTATION</span>
                </h1>
                <p className="text-xl text-white/50 uppercase tracking-tight max-w-2xl">
                    Complete engineering specs, blueprints, and system architectures.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { name: "UAV", icon: Cpu },
                    { name: "USV", icon: Ship },
                    { name: "UUV", icon: Zap }
                ].map((doc, i) => (
                    <div key={i} className="p-10 border border-white/5 bg-[#050505] group hover:border-sit-red/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white/5 text-sit-red rounded-sm group-hover:scale-110 transition-transform">
                                <doc.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-tight">{doc.name}</h3>
                        </div>
                        <div className="space-y-3 pt-4">
                            <div className="h-4 w-full bg-white/5 animate-pulse rounded" />
                            <div className="h-4 w-1/2 bg-white/5 animate-pulse rounded" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
