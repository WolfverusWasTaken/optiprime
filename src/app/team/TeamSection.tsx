import TeamMemberCard from "./TeamMemberCard";

interface TeamSectionProps {
  team: {
    division?: string;
    description?: string;
    members: Array<{ name: string; role?: string; imageUrl?: string }>;
  };
}

export default function TeamSection({ team }: TeamSectionProps) {
  return (
    <section className="mb-12">
      {team.division && (
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
          {team.division}
        </h2>
      )}
      {team.description && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          {team.description}
        </p>
      )}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
        {team.members.map((member, id) => (
          <TeamMemberCard key={id} member={member} />
        ))}
      </div>
    </section>
  );
}
