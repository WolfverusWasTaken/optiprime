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
    id: "onr",
    name: "Office of Naval Research",
    tier: "Research sponsor",
    url: "#",
    logoSrc: "/asset/Office_of_Naval_Research_Official_Logo.png",
    logoClass: "bg-white p-2",
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
  {
    id: "beex",
    name: "BeeX",
    tier: "Industry sponsor",
    url: "#",
    logoSrc: "/asset/beex.jpg",
  },
  {
    id: "mindef",
    name: "MINDEF",
    tier: "Defence sponsor",
    url: "#",
    logoSrc: "/asset/mindef.jpg",
    logoClass: "bg-white p-2",
  },
  {
    id: "robonation",
    name: "RoboNation",
    tier: "Competition partner",
    url: "#",
    logoSrc: "/asset/robonation.jpg",
    logoClass: "bg-white p-2",
  },
  {
    id: "tgn",
    name: "TGN Technology",
    tier: "Community sponsor",
    url: "#",
    logoSrc: "/asset/tgn.jpg",
  },
  {
    id: "waterlinked",
    name: "Water Linked",
    tier: "Technology partner",
    url: "#",
    logoSrc: "/asset/waterlinked.jpg",
    logoClass: "bg-white p-2",
  },
  {
    id: "vectornav",
    name: "VectorNav",
    tier: "Navigation sponsor",
    url: "https://www.vectornav.com/",
    logoSrc: "/asset/vectornav-logo.png",
    logoClass: "p-2",
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
        <p className="text-lg text-muted-foreground">
          We would like to express our sincere appreciation to the{" "}
          <strong> Singapore Institute of Technology (SIT)</strong> and all our
          sponsors and partners for their invaluable support throughout our
          RobotX journey. Your contributions, guidance, resources, and belief in
          our team have enabled us to learn, innovate, and push beyond our
          limits.
          <br></br>
          <strong>
            Thank you for being part of OptiPrime’s journey and helping us turn
            our ambitions into reality.
          </strong>
        </p>
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
