"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight } from "lucide-react";
import { useScroll, motion } from "framer-motion";

const navItems = [
    { name: "Platforms", href: "#platforms" },
    { name: "Team", href: "#team" },
    { name: "Sponsors", href: "#sponsor" },
];

// TODO: Replace src URLs with your final UAV / USV / UUV footage.
// Posters render until videos load and remain as fallback if src is empty.
const heroVideos = [
    {
        label: "UAV",
        src: "https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4",
        poster: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1500&auto=format&fit=crop",
        clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
    },
    {
        label: "USV",
        src: "https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4",
        poster: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1500&auto=format&fit=crop",
        clipPath: "polygon(15% 0, 100% 0, 85% 100%, -15% 100%)",
    },
    {
        label: "UUV",
        src: "https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4",
        poster: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1500&auto=format&fit=crop",
        clipPath: "polygon(15% 0, 100% 0, 100% 100%, -15% 100%)",
    },
];

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="relative">
                    {/* Three-split video background */}
                    <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-3">
                        {heroVideos.map((v) => (
                            <div
                                key={v.label}
                                className="relative overflow-hidden"
                                style={{ clipPath: v.clipPath }}
                            >
                                <video
                                    className="absolute inset-0 h-full w-full object-cover opacity-30"
                                    src={v.src}
                                    poster={v.poster}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                                <div className="absolute inset-0 bg-background/80" />
                            </div>
                        ))}
                        <div className="absolute top-0 left-1/3 w-8 h-full bg-background z-10 -translate-x-1/2 skew-x-[-15deg] border-x border-white/5 opacity-60" />
                        <div className="absolute top-0 left-2/3 w-8 h-full bg-background z-10 -translate-x-1/2 skew-x-[-15deg] border-x border-white/5 opacity-60" />
                    </div>

                    <div className="absolute inset-0 z-0 bg-dot-grid opacity-20" />
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />

                    <div className="relative z-20 py-32 md:py-44 lg:py-56">
                        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center lg:px-12">
                            <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight md:text-6xl xl:text-7xl">
                                <span className="text-white">Opti</span>
                                <span className="text-primary">Prime</span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
                                We design and build fully autonomous UAV, USV, and UUV
                                platforms — engineered together, deployed together.
                            </p>

                            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 rounded-full pl-5 pr-3 text-base"
                                >
                                    <Link href="#platforms">
                                        <span className="text-nowrap">View platforms</span>
                                        <ChevronRight className="ml-1" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 rounded-full px-5 text-base hover:bg-white/5"
                                >
                                    <Link href="#team">
                                        <span className="text-nowrap">Meet the team</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const { scrollYProgress } = useScroll();

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setScrolled(latest > 0.05);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <header>
            <nav
                data-state={menuState ? "active" : undefined}
                className="group fixed z-50 w-full pt-2"
            >
                <div
                    className={cn(
                        "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
                        scrolled && "bg-background/60 backdrop-blur-2xl"
                    )}
                >
                    <motion.div
                        className={cn(
                            "relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-5",
                            scrolled && "lg:py-3"
                        )}
                    >
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="OptiPrime home"
                                className="flex items-center gap-2.5"
                            >
                                <img
                                    src="/asset/logo.jpg"
                                    alt="OptiPrime"
                                    className="h-8 w-8 rounded-full object-contain"
                                />
                                <span className="text-base font-semibold tracking-tight">
                                    <span className="text-white">Opti</span>
                                    <span className="text-primary">Prime</span>
                                </span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? "Close menu" : "Open menu"}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                            >
                                <Menu className="m-auto size-6 duration-200 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" />
                                <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {navItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="block text-muted-foreground duration-150 hover:text-foreground"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 bg-background p-6 shadow-2xl shadow-black/40 group-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {navItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="block text-muted-foreground duration-150 hover:text-foreground"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    );
};
