import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const metadata: Metadata = {
    title: "OTIPRIME | Engineering Project Portal",
    description: "A high-performance portal for RobotX Otiprime engineering project.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={cn(inter.className, "relative")}>
                {/* Fixed Background Dot Grid Layer */}
                <div
                    className="fixed inset-0 z-[-1] pointer-events-none opacity-20 bg-dot-grid"
                    aria-hidden="true"
                />

                {/* Global Navigation Wrapper (Placeholder) */}
                <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5 bg-black/50 backdrop-blur-xl">
                    <div className="container mx-auto h-full flex items-center justify-between px-6 lg:px-12">
                        <div className="flex items-center gap-3">
                            {/* SIT Red Logo Placeholder */}
                            <div className="w-8 h-8 bg-sit-red rounded-sm rotate-45" />
                            <span className="font-bold tracking-tighter text-xl uppercase">OTIPRIME</span>
                        </div>

                        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                            {/* Navigation Placeholders */}
                            <a href="/" className="text-white/60 hover:text-sit-red transition-colors uppercase">HOME</a>
                            <a href="/about" className="text-white/60 hover:text-sit-red transition-colors uppercase">ABOUT US</a>
                            <a href="/teams" className="text-white/60 hover:text-sit-red transition-colors uppercase">TEAMS</a>
                        </nav>
                    </div>
                </header>

                {/* Main Content Areas */}
                <main className="pt-24 min-h-screen">
                    {children}
                </main>

                {/* Footer (Placeholder) */}
                <footer className="py-12 border-t border-white/5 bg-[#050505]">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                            <div className="max-w-xs">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-6 h-6 bg-sit-red rounded-sm" />
                                    <span className="font-bold tracking-tighter text-lg uppercase">OTIPRIME</span>
                                </div>
                                <p className="text-sm text-white/40 leading-relaxed">
                                    Engineering Portal for SIT RobotX Team.
                                </p>
                            </div>


                        </div>
                        <div className="mt-16 pt-8 border-t border-white/5 text-[10px] text-white/20 uppercase tracking-[0.2em]">
                            &copy; 2026 OTIPRIME ENGINEERING TEAM
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
