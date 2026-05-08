"use client";

import React from "react";

interface Sponsor {
    id: string;
    name: string;
    tier: string;
    url: string;
    logoSrc: string;
    logoClass?: string;
}

const sponsors: Sponsor[] = [
    {
        id: "incose",
        name: "INCOSE Foundation",
        tier: "Systems engineering partner",
        url: "https://www.incose.org",
        logoSrc: "/asset/Blue-INCOSE-logo-on-white-background.png",
        logoClass: "bg-white p-3",
    },
    {
        id: "alt_tab",
        name: "ALT TAB",
        tier: "Technology sponsor",
        url: "#",
        logoSrc: "/asset/ALT_TAB_Logo.webp",
    },
    {
        id: "ilaser",
        name: "iLaser",
        tier: "Manufacturing sponsor",
        url: "#",
        logoSrc: "/asset/ilaser_pte_ltd_logo.jpg",
        logoClass: "bg-white p-2",
    },
];

export default function SponsorSection() {
    return (
        <section className="container mx-auto px-6 lg:px-12">
            <div className="mb-12 flex flex-col items-start gap-2">
                <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    Sponsors
                </span>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    Backed by partners across systems, software, and manufacturing.
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
                {sponsors.map((sponsor) => {
                    const Wrapper = sponsor.url && sponsor.url !== "#" ? "a" : "div";
                    return (
                        <Wrapper
                            key={sponsor.id}
                            {...(Wrapper === "a"
                                ? {
                                      href: sponsor.url,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                  }
                                : {})}
                            className="group flex flex-col items-center justify-center gap-5 bg-background p-10 transition-colors hover:bg-white/[0.02]"
                        >
                            <div
                                className={`flex h-24 w-40 items-center justify-center overflow-hidden rounded-md ${
                                    sponsor.logoClass ?? ""
                                }`}
                            >
                                <img
                                    src={sponsor.logoSrc}
                                    alt={`${sponsor.name} logo`}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                            <h3 className="text-center text-sm font-semibold tracking-tight text-foreground">
                                {sponsor.name}
                            </h3>
                        </Wrapper>
                    );
                })}
            </div>
        </section>
    );
}
