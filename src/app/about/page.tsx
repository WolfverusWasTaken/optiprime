import React from "react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 lg:px-12 py-24 space-y-12">
            <header className="space-y-4 border-b border-soft-white/10 pb-12">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-soft-white">
                    ABOUT <span className="text-prime-red">US</span>
                </h1>
                <p className="text-xl text-light-grey/60 uppercase tracking-tight max-w-2xl">
                    The mission, vision, and core values of Team Otiprime.
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-prime-blue">OUR MISSION</h2>
                    <div className="h-4 w-full bg-soft-white/5 animate-pulse rounded" />
                    <div className="h-4 w-full bg-soft-white/5 animate-pulse rounded" />
                    <div className="h-4 w-3/4 bg-soft-white/5 animate-pulse rounded" />
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-prime-blue">OUR VISION</h2>
                    <div className="h-4 w-full bg-soft-white/5 animate-pulse rounded" />
                    <div className="h-4 w-full bg-soft-white/5 animate-pulse rounded" />
                    <div className="h-4 w-1/2 bg-soft-white/5 animate-pulse rounded" />
                </div>
            </section>

            <section className="pt-12 border-t border-soft-white/5">
                <div className="aspect-[21/9] w-full bg-navy-steel border border-soft-white/5 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 bg-dot-grid" />
                    <span className="text-medium-grey/20 italic text-xl uppercase font-black tracking-widest group-hover:text-prime-blue/20 transition-colors">
                        Insert Team Photo/Media Here
                    </span>
                </div>
            </section>

        </div>
    );
}
