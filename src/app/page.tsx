"use client";

import React, { useState, useEffect } from "react";
import {
    Cpu,
    Ship,
    Waves,
    Radar,
    Cog,
    BatteryFull,
    Compass,
    Wifi,
    Camera,
    Activity,
    Anchor,
    Zap,
    User,
} from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import RadialOrbitalTimeline, {
    type TimelineItem,
} from "@/components/ui/radial-orbital-timeline";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import SponsorSection from "@/components/Sponsors";

type PlatformKey = "uav" | "usv" | "uuv";

interface Platform {
    key: PlatformKey;
    name: string;
    fullname: string;
    tagline: string;
    description: string;
    image: string;
    components: TimelineItem[];
}

const platforms: Platform[] = [
    {
        key: "uav",
        name: "UAV",
        fullname: "Unmanned Aerial Vehicle",
        tagline: "Aerial domain",
        description:
            "Autonomous aerial platform for high-altitude reconnaissance, situational awareness, and rapid payload deployment over open water.",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1600&auto=format&fit=crop",
        components: [
            {
                id: 1,
                title: "Airframe",
                date: "Carbon-composite",
                category: "Structural",
                content:
                    "Carbon-fiber composite airframe designed for maritime conditions: salt-resistant, low-observable, modular payload bay.",
                icon: Cog,
                relatedIds: [2, 7],
                status: "completed",
                energy: 90,
            },
            {
                id: 2,
                title: "Propulsion",
                date: "Brushless EDF",
                category: "Powertrain",
                content:
                    "Quad brushless DC motors driving carbon props. Sustained cruise of 80 km/h with 35 min endurance.",
                icon: Zap,
                relatedIds: [1, 7],
                status: "in-progress",
                energy: 80,
            },
            {
                id: 3,
                title: "Flight Controller",
                date: "Pixhawk-class",
                category: "Avionics",
                content:
                    "Open-source flight stack with custom autonomy plugins. PX4 base, in-house guidance and mission planner.",
                icon: Cpu,
                relatedIds: [4, 5],
                status: "in-progress",
                energy: 75,
            },
            {
                id: 4,
                title: "Vision",
                date: "Stereo + IR",
                category: "Perception",
                content:
                    "Stereo RGB + thermal IR for target detection, tracking, and obstacle avoidance. Edge-inferenced on Jetson.",
                icon: Camera,
                relatedIds: [3],
                status: "in-progress",
                energy: 70,
            },
            {
                id: 5,
                title: "Datalink",
                date: "5 GHz mesh",
                category: "Comms",
                content:
                    "Long-range 5 GHz mesh radio with USV/UUV interoperability. Encrypted telemetry + video downlink.",
                icon: Wifi,
                relatedIds: [3],
                status: "pending",
                energy: 50,
            },
            {
                id: 7,
                title: "Power",
                date: "6S LiPo",
                category: "Power",
                content:
                    "High-density 6S LiPo pack with hot-swap modules. Onboard health monitoring and load balancing.",
                icon: BatteryFull,
                relatedIds: [1, 2],
                status: "completed",
                energy: 85,
            },
        ],
    },
    {
        key: "usv",
        name: "USV",
        fullname: "Unmanned Surface Vehicle",
        tagline: "Surface domain",
        description:
            "High-speed autonomous surface craft for waypoint navigation, dynamic obstacle avoidance, and coordinated multi-agent missions.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
        components: [
            {
                id: 1,
                title: "Hull",
                date: "Aluminum monohull",
                category: "Structural",
                content:
                    "Welded marine-grade aluminum monohull. Optimized for stability and survivability in moderate sea states.",
                icon: Ship,
                relatedIds: [2, 6],
                status: "completed",
                energy: 90,
            },
            {
                id: 2,
                title: "Propulsion",
                date: "Twin water jets",
                category: "Powertrain",
                content:
                    "Twin water-jet drives with vectored thrust. Burst speed >30 kt, fully reversible without rudders.",
                icon: Zap,
                relatedIds: [1, 6],
                status: "in-progress",
                energy: 75,
            },
            {
                id: 3,
                title: "Navigation",
                date: "RTK GPS + IMU",
                category: "Avionics",
                content:
                    "Centimeter-grade RTK GPS fused with tactical-grade IMU and dual-antenna heading.",
                icon: Compass,
                relatedIds: [4, 5],
                status: "in-progress",
                energy: 80,
            },
            {
                id: 4,
                title: "Perception",
                date: "Radar + LiDAR",
                category: "Perception",
                content:
                    "Marine radar + 360° LiDAR for COLREGs-aware obstacle avoidance and target classification.",
                icon: Radar,
                relatedIds: [3],
                status: "in-progress",
                energy: 70,
            },
            {
                id: 5,
                title: "Comms",
                date: "4G + 900 MHz",
                category: "Comms",
                content:
                    "Dual-link comms — cellular for shore link plus 900 MHz mesh for inter-vehicle coordination.",
                icon: Wifi,
                relatedIds: [3],
                status: "pending",
                energy: 55,
            },
            {
                id: 6,
                title: "Power",
                date: "Hybrid Li-ion",
                category: "Power",
                content:
                    "Hybrid Li-ion battery + solar trickle for extended station-keeping missions.",
                icon: BatteryFull,
                relatedIds: [1, 2],
                status: "in-progress",
                energy: 65,
            },
        ],
    },
    {
        key: "uuv",
        name: "UUV",
        fullname: "Unmanned Underwater Vehicle",
        tagline: "Subsurface domain",
        description:
            "Subsurface platform engineered for deep-water mapping, acoustic telemetry relay, and precision underwater intervention tasks.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
        components: [
            {
                id: 1,
                title: "Pressure Hull",
                date: "6061-T6 aluminum",
                category: "Structural",
                content:
                    "Pressure-rated aluminum hull validated to 200 m depth. Wet-mateable connectors and modular endcaps.",
                icon: Anchor,
                relatedIds: [2, 6],
                status: "completed",
                energy: 85,
            },
            {
                id: 2,
                title: "Thrusters",
                date: "Magnetic-coupled",
                category: "Powertrain",
                content:
                    "Six magnetic-coupled DC thrusters in vectored arrangement for full 6-DOF control.",
                icon: Zap,
                relatedIds: [1, 6],
                status: "in-progress",
                energy: 70,
            },
            {
                id: 3,
                title: "Navigation",
                date: "DVL + INS",
                category: "Avionics",
                content:
                    "Doppler velocity log fused with inertial navigation for sub-meter dead-reckoning accuracy.",
                icon: Compass,
                relatedIds: [4, 5],
                status: "in-progress",
                energy: 60,
            },
            {
                id: 4,
                title: "Sonar",
                date: "Multibeam imaging",
                category: "Perception",
                content:
                    "Forward-looking multibeam sonar for obstacle avoidance and seabed mapping at depth.",
                icon: Activity,
                relatedIds: [3],
                status: "pending",
                energy: 45,
            },
            {
                id: 5,
                title: "Acoustic Modem",
                date: "25 kHz",
                category: "Comms",
                content:
                    "Acoustic modem for low-bandwidth subsurface telemetry. Surface relay via paired USV.",
                icon: Wifi,
                relatedIds: [3],
                status: "pending",
                energy: 40,
            },
            {
                id: 6,
                title: "Power",
                date: "Pressure-tolerant Li-ion",
                category: "Power",
                content:
                    "Pressure-tolerant Li-ion cells in oil-filled housing. Hot-swap canisters for rapid turnaround.",
                icon: BatteryFull,
                relatedIds: [1, 2],
                status: "in-progress",
                energy: 65,
            },
        ],
    },
];

const teamMembers = [
    { name: "John Doe", role: "Aerospace Engineer", division: "UAV" },
    { name: "Jane Smith", role: "Flight Dynamics", division: "UAV" },
    { name: "Alex Wong", role: "Computer Vision", division: "UAV" },
    { name: "Sarah Connor", role: "Payload Specialist", division: "UAV" },
    { name: "Mike Chen", role: "Naval Architect", division: "USV" },
    { name: "Emily Davis", role: "Propulsion Lead", division: "USV" },
    { name: "David Kim", role: "Autonomy Software", division: "USV" },
    { name: "Chloe Zhao", role: "Systems Integration", division: "USV" },
    { name: "Robert Fox", role: "Subsea Engineer", division: "UUV" },
    { name: "Alice Johnson", role: "Acoustics Specialist", division: "UUV" },
    { name: "Tom Hardy", role: "Hydrodynamics", division: "UUV" },
    { name: "Nina Williams", role: "Embedded Systems", division: "UUV" },
];

function statusLabel(s: TimelineItem["status"]) {
    if (s === "completed") return "Operational";
    if (s === "in-progress") return "In development";
    return "Planned";
}

function statusBadgeClass(s: TimelineItem["status"]) {
    if (s === "completed") return "bg-white text-black border-white";
    if (s === "in-progress") return "bg-primary text-primary-foreground border-primary";
    return "bg-white/10 text-white border-white/30";
}

function ComponentSpecPanel({ item }: { item: TimelineItem }) {
    const Icon = item.icon;
    return (
        <div className="flex h-full flex-col gap-6 p-6 md:p-8">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {item.category}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        {item.title}
                    </h3>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Badge
                    className={cn(
                        "rounded-full border px-2.5 text-[10px] uppercase tracking-widest",
                        statusBadgeClass(item.status)
                    )}
                >
                    {statusLabel(item.status)}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">
                    {item.date}
                </span>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.content}
            </p>

            <div className="mt-auto">
                <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Readiness</span>
                    <span className="font-mono">{item.energy}%</span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                        className="h-full bg-gradient-to-r from-primary to-rose-700"
                        style={{ width: `${item.energy}%` }}
                    />
                </div>
            </div>
        </div>
    );
}

function PlatformOverviewPanel({ platform }: { platform: Platform }) {
    return (
        <div className="flex h-full flex-col">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                    src={platform.image}
                    alt={platform.name}
                    className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                    <p className="text-xs uppercase tracking-widest text-primary">
                        {platform.tagline}
                    </p>
                    <h3 className="text-3xl font-semibold tracking-tight">
                        {platform.name}
                        <span className="ml-2 text-sm font-normal text-muted-foreground">
                            {platform.fullname}
                        </span>
                    </h3>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-4 p-6 md:p-8">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {platform.description}
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Click a node to inspect a component →
                </p>
            </div>
        </div>
    );
}

export default function HomePage() {
    const [activeKey, setActiveKey] = useState<PlatformKey>("uav");
    const [selected, setSelected] = useState<TimelineItem | null>(null);

    // Reset selection when switching platforms
    useEffect(() => {
        setSelected(null);
    }, [activeKey]);

    const platform = platforms.find((p) => p.key === activeKey)!;

    return (
        <>
            <HeroSection />

            <div className="flex flex-col gap-32 pb-24">
                {/* Platforms */}
                <section
                    id="platforms"
                    className="container mx-auto scroll-mt-24 px-6 lg:px-12"
                >
                    <div className="mb-8 flex flex-col items-start gap-2">
                        <span className="text-xs font-medium uppercase tracking-widest text-primary">
                            Platforms
                        </span>
                        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                            Three platforms. Inspect each system.
                        </h2>
                        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                            Select a platform, then click any node to view the
                            component spec.
                        </p>
                    </div>

                    {/* Platform tabs */}
                    <div
                        role="tablist"
                        aria-label="Platforms"
                        className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.02] p-1"
                    >
                        {platforms.map((p) => (
                            <button
                                key={p.key}
                                role="tab"
                                aria-selected={activeKey === p.key}
                                onClick={() => setActiveKey(p.key)}
                                className={cn(
                                    "rounded-full px-5 py-2 text-sm font-medium tracking-tight transition-colors",
                                    activeKey === p.key
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {p.name}
                            </button>
                        ))}
                    </div>

                    {/* Two-column: orbital LEFT, model/specs RIGHT */}
                    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-2">
                        <div className="relative h-[560px] bg-background md:h-[640px]">
                            <RadialOrbitalTimeline
                                key={activeKey}
                                timelineData={platform.components}
                                hideExpandedCard
                                onNodeSelect={setSelected}
                                className="bg-background"
                            />
                            <div className="pointer-events-none absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                {platform.name} · {platform.components.length} systems
                            </div>
                        </div>

                        <div className="bg-background">
                            {selected ? (
                                <ComponentSpecPanel item={selected} />
                            ) : (
                                <PlatformOverviewPanel platform={platform} />
                            )}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section
                    id="team"
                    className="container mx-auto scroll-mt-24 px-6 lg:px-12"
                >
                    <div className="mb-12 flex flex-col items-start gap-2">
                        <span className="text-xs font-medium uppercase tracking-widest text-primary">
                            Team
                        </span>
                        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                            The engineers behind OptiPrime.
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
                        {teamMembers.map((m) => (
                            <div
                                key={m.name}
                                className="group flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-white/[0.02]"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                    <User className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold tracking-tight">
                                        {m.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {m.role}
                                    </p>
                                </div>
                                <span className="mt-1 text-[10px] font-medium uppercase tracking-widest text-primary/80">
                                    {m.division} Division
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sponsors */}
                <div id="sponsor" className="scroll-mt-24">
                    <SponsorSection />
                </div>
            </div>
        </>
    );
}
