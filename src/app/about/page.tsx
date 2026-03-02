import React from "react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 lg:px-12 py-24 space-y-12">
            <header className="space-y-4 border-b border-white/10 pb-12">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                    ABOUT <span className="text-sit-red">US</span>
                </h1>
                <p className="text-xl text-white/50 uppercase tracking-tight max-w-2xl">
                    The mission, vision, and core values of Team Otiprime.
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-sit-red">OUR MISSION</h2>
                    <div className="h-4 w-full bg-white/5 animate-pulse rounded" />
                    <div className="h-4 w-full bg-white/5 animate-pulse rounded" />
                    <div className="h-4 w-3/4 bg-white/5 animate-pulse rounded" />
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-sit-red">OUR VISION</h2>
                    <div className="h-4 w-full bg-white/5 animate-pulse rounded" />
                    <div className="h-4 w-full bg-white/5 animate-pulse rounded" />
                    <div className="h-4 w-1/2 bg-white/5 animate-pulse rounded" />
                </div>
            </section>

            <section className="pt-12 border-t border-white/5">
                <div className="aspect-[21/9] w-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 bg-dot-grid" />
                    <span className="text-white/10 italic text-xl uppercase font-black tracking-widest group-hover:text-sit-red/20 transition-colors">
                        Insert Team Photo/Media Here
                    </span>
                </div>
            </section>
        </div>
    );
}
