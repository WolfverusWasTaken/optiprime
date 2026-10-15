"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { teamCredits } from "../teamCredits";
import { leadership } from "../leadership";
import TeamSection from "./TeamSection";

export default function Team() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
          About Us
        </h1>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Founded in February 2026, OptiPrime began with zero experience in the
          Maritime RobotX Challenge—just a team willing to learn, build, and
          take on something completely new. Our interdisciplinary team brings
          together students, faculty members, and research staff, combining
          diverse perspectives, expertise, and a shared commitment to
          innovation. <br></br>
          <br></br> Since then, every step has been a learning experience. From
          designing and integrating our autonomous systems to testing,
          troubleshooting, and overcoming unexpected challenges, our team has
          been learning as we go and constantly pushing ourselves beyond what we
          knew before. <br></br>
          <br></br> With a tight development timeline, balancing academics,
          research, and other commitments has not always been easy. But through
          long hours, continuous experimentation, teamwork, and perseverance, we
          continue to push forward together.
          <br></br>
          <br></br> For us, RobotX is more than just a competition. It is an
          opportunity to learn by doing, challenge ourselves, and turn what
          started from zero into something we are proud to call OptiPrime.
        </p>
        <h1 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
          Our Team
        </h1>
        <TeamSection
          team={{ division: "Leadership", members: leadership }}
        ></TeamSection>
        {teamCredits.map((team, id) => (
          <TeamSection key={id} team={team} />
        ))}
      </main>
    </>
  );
}
