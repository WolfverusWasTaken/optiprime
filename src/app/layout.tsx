import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "OptiPrime | Autonomous Maritime Robotics",
    description:
        "OptiPrime engineers fully autonomous UAV, USV, and UUV platforms.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={cn(inter.className, "relative")}>
                <div
                    className="fixed inset-0 z-[-1] pointer-events-none opacity-20 bg-dot-grid"
                    aria-hidden="true"
                />

                <main className="min-h-screen">{children}</main>

                <footer className="border-t border-white/10 py-12">
                    <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center lg:px-12">
                        <div className="flex items-center gap-2.5">
                            <img
                                src="/asset/logo.jpg"
                                alt="OptiPrime"
                                className="h-7 w-7 rounded-full object-contain"
                            />
                            <span className="text-sm font-semibold tracking-tight">
                                <span className="text-white">Opti</span>
                                <span className="text-primary">Prime</span>
                            </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            &copy; 2026 OptiPrime. Autonomous maritime robotics.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
