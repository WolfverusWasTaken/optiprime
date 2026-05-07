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
    title: "OptiPrime | Engineering Project Portal",
    description: "A high-performance portal for RobotX OptiPrime engineering project.",
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

                {/* Global Navigation Wrapper */}
                <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-soft-white/5 bg-pure-black/80 backdrop-blur-xl">
                    <div className="container mx-auto h-full flex items-center justify-between px-6 lg:px-12">
                        <div className="flex items-center gap-3">
                            <img src="/asset/logo.jpg" alt="OptiPrime Logo" className="w-10 h-10 object-contain rounded-full" />
                            <span className="font-bold tracking-tighter text-xl uppercase"><span className="text-white">OPTI</span><span className="text-prime-red">PRIME</span></span>
                        </div>

                        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                            {/* Navigation Links */}
                            <a href="#home" className="text-light-grey/60 hover:text-prime-red transition-colors uppercase">HOME</a>
                            <a href="#products" className="text-light-grey/60 hover:text-prime-red transition-colors uppercase">PRODUCTS</a>
                            <a href="#team" className="text-light-grey/60 hover:text-prime-red transition-colors uppercase">TEAM</a>
                            <a href="#vision-mission" className="text-light-grey/60 hover:text-prime-red transition-colors uppercase">VISION & MISSION</a>
                            <a href="#sponsor" className="text-light-grey/60 hover:text-prime-red transition-colors uppercase">SPONSOR</a>
                        </nav>
                    </div>
                </header>

                {/* Main Content Areas */}
                <main className="pt-24 min-h-screen">
                    {children}
                </main>

                {/* Footer */}
                <footer className="py-12 border-t border-soft-white/5 bg-dark-gray">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                            <div className="max-w-xs">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src="/asset/logo.jpg" alt="OptiPrime Logo" className="w-8 h-8 object-contain rounded-full" />
                                    <span className="font-bold tracking-tighter text-lg uppercase"><span className="text-white">OPTI</span><span className="text-prime-red">PRIME</span></span>
                                </div>
                                <p className="text-sm text-light-grey/60 leading-relaxed">
                                    Engineering Portal for SIT RobotX Team.
                                </p>
                            </div>


                        </div>
                        <div className="mt-16 pt-8 border-t border-soft-white/5 text-[10px] text-medium-grey uppercase tracking-[0.2em]">
                            &copy; 2026 OPTIPRIME ENGINEERING TEAM
                        </div>
                    </div>
                </footer>

            </body>
        </html>
    );
}
