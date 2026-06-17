"use client";

import React, { useState, useEffect } from "react";
import {
    Cpu,
    Ship,
    Cog,
    BatteryFull,
    Compass,
    Wifi,
    Camera,
    Activity,
    Anchor,
    Zap,
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
    specs: Array<{ label: string; value: string }>;
    techStack: string[];
    capabilities: string[];
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
        image: "/asset/platform-uav.png",
        specs: [
            { label: "Frame", value: "ZD680" },
            { label: "FCU", value: "Pixhawk 6X Pro" },
            { label: "Compute", value: "Orin NX 16GB" },
            { label: "Motors", value: "4 x U5 KV400" },
            { label: "ESC", value: "4 x AIR 40A 6S" },
            { label: "Telemetry", value: "915 MHz" },
        ],
        techStack: [
            "HolyBro Pixhawk 6X Pro",
            "NVIDIA Jetson Orin NX 16GB",
            "M10 V2 GPS",
            "FrSky X8R Receiver",
            "HolyBro SiK 915MHz",
            "UISP airMAX",
            "PM02D Power Module",
            "Ethernet Switch",
        ],
        capabilities: [
            "Initial UAV architecture based on the attached OptiPrime draw.io system diagram.",
            "Primary control stack links Pixhawk 6X Pro, Jetson Orin NX, GPS, RC receiver, and long-range telemetry.",
            "6S power distribution supports the ESCs, flight controller, Jetson regulator, and Ethernet/radio network.",
        ],
        components: [
            {
                id: 1,
                title: "Airframe",
                date: "ZD680 frame",
                category: "Structural",
                content:
                    "ZD680 frame listed as the current UAV frame reference in the system diagram.",
                icon: Cog,
                relatedIds: [2, 7],
                status: "completed",
                energy: 90,
            },
            {
                id: 2,
                title: "Propulsion",
                date: "T-MOTOR U5 KV400",
                category: "Powertrain",
                content:
                    "Four T-MOTOR U5 KV400 motors driven by four T-MOTOR AIR 40A 6S UAV ESCs over ESC PWM.",
                icon: Zap,
                relatedIds: [1, 7],
                status: "in-progress",
                energy: 80,
            },
            {
                id: 3,
                title: "Flight Controller",
                date: "HolyBro Pixhawk 6X Pro",
                category: "Avionics",
                content:
                    "HolyBro Pixhawk 6X Pro connected to PM02D power input, M10 V2 secondary GPS, ESC PWM outputs, receiver, and telemetry radio.",
                icon: Cpu,
                relatedIds: [4, 5],
                status: "in-progress",
                energy: 75,
            },
            {
                id: 4,
                title: "Compute",
                date: "Jetson Orin NX",
                category: "Companion",
                content:
                    "NVIDIA Jetson Orin NX 16GB companion computer, powered through a 12A UBEC and networked through an Ethernet switch.",
                icon: Camera,
                relatedIds: [3],
                status: "in-progress",
                energy: 70,
            },
            {
                id: 5,
                title: "Datalink",
                date: "915 MHz + airMAX",
                category: "Comms",
                content:
                    "HolyBro SiK Telemetry Radio V3 long-range 1W 915MHz, FrSky X8R receiver, UISP airMAX Bullet AC IP67, and Rocket Prism 5AC antenna link.",
                icon: Wifi,
                relatedIds: [3],
                status: "pending",
                energy: 50,
            },
            {
                id: 7,
                title: "Power",
                date: "6S battery",
                category: "Power",
                content:
                    "6S battery feeds PM02D power module and power distribution board, with a dedicated 12A UBEC rail for the Jetson.",
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
        image: "/asset/platform-usv.png",
        specs: [
            { label: "Endurance", value: "33 hr" },
            { label: "Range", value: "117 km" },
            { label: "Max speed", value: "3 m/s" },
            { label: "Capacity", value: "1064 Wh" },
            { label: "Weight", value: "16 kg" },
            { label: "FCU", value: "Pixhawk 6C" },
        ],
        techStack: [
            "Pixhawk 6C",
            "915 MHz Telemetry Radio",
            "Acoustic modem to UUV",
            "4 x M200 Motor",
            "Weedless Propeller",
            "Differential Thrust",
            "Displacement Catamaran",
            "4-battery pack",
        ],
        capabilities: [
            "33-hour endurance estimate at 1 m/s, about 30 W, with no payload.",
            "Differential-thrust catamaran platform with four M200 weedless-propeller drives.",
            "Surface communication bridge using 915 MHz telemetry and an acoustic modem link to the UUV.",
        ],
        components: [
            {
                id: 1,
                title: "Hull",
                date: "Displacement catamaran",
                category: "Structural",
                content:
                    "Displacement hull catamaran. Dimensions: deployed 120 x 93 x 46 cm, folded 120 x 71 x 24 cm, packaged 120 x 46 x 20 cm. Weight is 16 kg without batteries or payload.",
                icon: Ship,
                relatedIds: [2, 6],
                status: "completed",
                energy: 90,
            },
            {
                id: 2,
                title: "Propulsion",
                date: "4 x M200",
                category: "Powertrain",
                content:
                    "Four M200 motors with weedless propellers. Steering is handled through differential thrust. Maximum speed is 3 m/s, about 6 kt, with no payload.",
                icon: Zap,
                relatedIds: [1, 6],
                status: "in-progress",
                energy: 75,
            },
            {
                id: 3,
                title: "FCU",
                date: "Pixhawk 6C",
                category: "Avionics",
                content:
                    "Pixhawk 6C flight control unit for USV control, power management, and mission execution.",
                icon: Compass,
                relatedIds: [4, 5],
                status: "in-progress",
                energy: 80,
            },
            {
                id: 4,
                title: "Endurance",
                date: "1064 Wh",
                category: "Power",
                content:
                    "Four-battery capacity of 1064 Wh. Estimated endurance is 33 hours and estimated range is 117 km at 1 m/s, about 30 W, with no payload.",
                icon: BatteryFull,
                relatedIds: [3],
                status: "in-progress",
                energy: 70,
            },
            {
                id: 5,
                title: "Telemetry",
                date: "915 MHz",
                category: "Comms",
                content:
                    "915 MHz telemetry radio for surface communication and operator link.",
                icon: Wifi,
                relatedIds: [3],
                status: "pending",
                energy: 55,
            },
            {
                id: 6,
                title: "Acoustic Modem",
                date: "UUV link",
                category: "Comms",
                content:
                    "Acoustic modem provides communication between the USV and UUV.",
                icon: Wifi,
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
        image: "/asset/platform-uuv.png",
        specs: [
            { label: "Dimensions", value: "600 x 600 x 400 mm" },
            { label: "Air weight", value: "~35 kg" },
            { label: "Top speed", value: "~1.5 m/s" },
            { label: "Propulsion", value: "8 x T200" },
            { label: "Power", value: "2 x 4S 5500mAh" },
            { label: "Comms", value: "M16 Acoustic" },
        ],
        techStack: [
            "Pixhawk 6X Pro",
            "Orin NX 16GB",
            "RPi5 16GB",
            "WaterLinked A50 DVL",
            "VectorNav VN100 IMU",
            "Bar30 Pressure Sensor",
            "Aquarian S1 Hydrophone Array",
            "WaterLinked M16 Acoustic Modem",
        ],
        capabilities: [
            "Compact 600 x 600 x 400 mm UUV platform with about 35 kg air weight.",
            "Six-degree-of-freedom propulsion using eight BlueRobotics T200 thrusters.",
            "Navigation and UUV-to-USV communication through DVL/IMU/depth sensing and WaterLinked M16 acoustic modem.",
        ],
        components: [
            {
                id: 1,
                title: "Pressure Hull",
                date: "600 x 600 x 400 mm",
                category: "Structural",
                content:
                    "UUV body dimensions are about 600 x 600 x 400 mm, with about 35 kg air weight.",
                icon: Anchor,
                relatedIds: [2, 6],
                status: "completed",
                energy: 85,
            },
            {
                id: 2,
                title: "Thrusters",
                date: "8 x T200",
                category: "Powertrain",
                content:
                    "Eight BlueRobotics T200 thrusters: four vectored and four vertical for 6 DOF control. Top speed is about 1.5 m/s.",
                icon: Zap,
                relatedIds: [1, 6],
                status: "in-progress",
                energy: 70,
            },
            {
                id: 3,
                title: "Navigation",
                date: "A50 + VN100",
                category: "Avionics",
                content:
                    "WaterLinked A50 DVL, VectorNav VN100 IMU, and BlueRobotics Bar30 pressure sensor provide velocity, attitude, and depth data.",
                icon: Compass,
                relatedIds: [4, 5],
                status: "in-progress",
                energy: 60,
            },
            {
                id: 4,
                title: "Sensors",
                date: "Hydrophones + camera",
                category: "Perception",
                content:
                    "Aquarian S1 hydrophone array and BlueRobotics 1080p front-facing camera provide acoustic and visual sensing.",
                icon: Activity,
                relatedIds: [3],
                status: "pending",
                energy: 45,
            },
            {
                id: 5,
                title: "Acoustic Modem",
                date: "WaterLinked M16",
                category: "Comms",
                content:
                    "WaterLinked M16 Acoustic Modem provides the UUV communication link to the USV.",
                icon: Wifi,
                relatedIds: [3],
                status: "pending",
                energy: 40,
            },
            {
                id: 6,
                title: "Compute + Power",
                date: "Orin NX + RPi5",
                category: "Compute",
                content:
                    "FCU and compute stack: Pixhawk 6X Pro, Orin NX 16GB, and RPi5 16GB. Power is supplied by two 4S 14.8V 5500mAh packs.",
                icon: BatteryFull,
                relatedIds: [1, 2],
                status: "in-progress",
                energy: 65,
            },
        ],
    },
];

const leadership = [
    { name: "Calwin Ang", role: "General Lead" },
    { name: "Carl Louis", role: "Co-Lead (Development)" },
    { name: "Hugh", role: "Co-Lead (Operations)" },
    { name: "Yuen Tao", role: "Sub-Team Lead (UAV)" },
    { name: "Fabian", role: "Sub-Team Lead (UUV)" },
    { name: "Wei Lun", role: "Sub-Team Lead (USV)" },
    { name: "Alexi", role: "Integration Lead" },
];

const teamCredits = [
    {
        division: "UAV",
        members: ["Nigel", "Gen Yen", "Alicia", "Jarvis", "Glenda"],
    },
    {
        division: "USV",
        members: ["More members to be added."],
    },
    {
        division: "UUV",
        members: ["More members to be added."],
    },
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
    const primarySpecs = platform.specs.slice(0, 4);
    const primaryStack = platform.techStack.slice(0, 6);
    const primaryCapability = platform.capabilities[0];

    return (
        <div className="flex h-full flex-col gap-5 overflow-y-auto p-5 md:p-6">
            <div className="max-w-xl">
                <p className="text-xs uppercase tracking-widest text-primary">
                    {platform.tagline}
                </p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                    {platform.name}
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                        {platform.fullname}
                    </span>
                </h3>
            </div>
            <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                    Machine specs
                </p>
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
                    {primarySpecs.map((spec) => (
                        <div key={spec.label} className="bg-background/95 p-3">
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                                {spec.label}
                            </p>
                            <p className="mt-1 font-mono text-base text-white">
                                {spec.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                    Onboard tech stack
                </p>
                <div className="flex flex-wrap gap-2">
                    {primaryStack.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                    Mission profile
                </p>
                <div className="border-l border-primary/60 bg-white/[0.02] py-2 pl-4 text-sm leading-relaxed text-muted-foreground">
                    {primaryCapability}
                </div>
            </div>
            <div>
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
                            Machine specs and autonomy stack.
                        </h2>
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
                    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:h-[640px] lg:grid-cols-2">
                        <div className="relative h-[560px] bg-background md:h-[640px] lg:h-full">
                            <RadialOrbitalTimeline
                                key={activeKey}
                                timelineData={platform.components}
                                hideExpandedCard
                                onNodeSelect={setSelected}
                                backgroundImage={platform.image}
                                backgroundAlt={platform.fullname}
                                className="bg-background"
                            />
                            <div className="pointer-events-none absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                {platform.name} · {platform.components.length} systems
                            </div>
                        </div>

                        <div className="h-[400px] overflow-hidden bg-background lg:h-full">
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

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                        <div className="relative flex min-h-[280px] items-end overflow-hidden bg-background p-8">
                            <div className="absolute inset-0 bg-dot-grid opacity-20" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-white/[0.03]" />
                            <div className="relative">
                                <p className="text-xs uppercase tracking-widest text-primary">
                                    Team photo
                                </p>
                                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                                    OptiPrime 2026
                                </h3>
                            </div>
                        </div>

                        <div className="grid gap-px bg-white/10 lg:grid-cols-[1.15fr_1fr]">
                            <div className="bg-background p-6 md:p-8">
                                <p className="mb-5 text-xs uppercase tracking-widest text-muted-foreground">
                                    Leads
                                </p>
                                <div className="grid gap-4">
                                    {leadership.map((member) => (
                                        <div
                                            key={`${member.name}-${member.role}`}
                                            className="grid gap-1 border-b border-white/10 pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[180px_1fr]"
                                        >
                                            <h3 className="text-sm font-semibold tracking-tight text-foreground">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {member.role}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-px bg-white/10">
                                {teamCredits.map((group) => (
                                    <div key={group.division} className="bg-background p-6">
                                        <p className="mb-4 text-xs uppercase tracking-widest text-primary">
                                            {group.division}
                                        </p>
                                        <ul className="grid gap-2">
                                            {group.members.map((member) => (
                                                <li
                                                    key={`${group.division}-${member}`}
                                                    className="text-sm text-muted-foreground"
                                                >
                                                    {member}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
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
