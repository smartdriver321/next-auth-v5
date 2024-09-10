import Link from "next/link";

import prisma from "@/lib/prisma";

export default async function HomePage() {
  const users = await prisma.user.findMany();

  return (
    <main className="flex flex-col items-center gap-6 px-3 py-10">
      <h1 className="text-center text-4xl font-bold">Next-Auth V5 Tutorial</h1>
      <h2 className="text-center text-2xl font-semibold">Users</h2>
      {/* TODO: Display users here */}
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/user/${user.id}`} className="hover:underline">
            {user.name || `User ${user.id}`}
          </Link>
        </li>
      ))}
    </main>
  );
}
