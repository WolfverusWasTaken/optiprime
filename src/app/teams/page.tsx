import React from "react";
import { Cpu, Ship, Zap } from "lucide-react";

export default function TeamsPage() {
    return (
        <div className="container mx-auto px-6 lg:px-12 py-24 space-y-24">
            <header className="space-y-4 border-b border-white/10 pb-12">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                    OUR <span className="text-sit-red">TEAMS</span>
                </h1>
                <p className="text-xl text-white/50 uppercase tracking-tight max-w-2xl">
                    The structural organization of Otiprime.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { name: "UAV TEAM", icon: Cpu },
                    { name: "USV TEAM", icon: Ship },
                    { name: "UUV TEAM", icon: Zap }
                ].map((team, i) => (
                    <div key={i} className="p-10 border border-white/5 bg-[#050505] group hover:border-sit-red transition-all">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white/5 text-sit-red rounded-sm group-hover:bg-sit-red group-hover:text-white transition-colors">
                                <team.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-tight">{team.name}</h3>
                        </div>
                        <div className="space-y-4 pt-6">
                            <div className="h-4 w-full bg-white/5 animate-pulse rounded" />
                            <div className="h-4 w-5/6 bg-white/5 animate-pulse rounded" />
                            <button className="text-xs text-sit-red font-black uppercase tracking-widest mt-8 flex items-center gap-1 hover:underline">
                                VIEW DETAILS
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
