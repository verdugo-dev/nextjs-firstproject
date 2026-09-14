import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

async function getUser(id: string) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const user = await getUser(id);
  return {
    title: user ? `${user.first_name} ${user.last_name} | User` : `User #${id}`,
  };
}

const UserDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const user = await getUser(id);

  if (!user) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-opacity hover:opacity-90"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </Link>

      <div className="mx-auto mt-8 max-w-md">
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition-shadow hover:shadow-xl hover:shadow-purple-500/10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
          <div className="mx-auto w-fit rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="h-28 w-28 rounded-full object-cover ring-4 ring-black/40"
            />
          </div>
          <div className="mt-6">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300">
              #{user.id}
            </span>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              {user.first_name} {user.last_name}
            </h1>
            <p className="mt-2 text-sm text-gray-400">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;