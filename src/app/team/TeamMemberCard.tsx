import Image from "next/image";

interface TeamMemberCardProps {
  member: { name: string; role?: string; imageUrl?: string };
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-sm transition hover:shadow-md">
      {member.imageUrl ? (
        <Image
          src={member.imageUrl ? member.imageUrl : ""}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-300 dark:bg-gray-700">
          <span className="text-3xl font-semibold text-gray-500 dark:text-gray-300 sm:text-4xl">
            {getInitials(member.name)}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <h3 className="text-base font-semibold text-white sm:text-lg">
          {member.name}
        </h3>
        <p className="text-sm text-gray-200">{member.role}</p>
      </div>
    </div>
  );
}
