"use client"

import { useRouter } from "next/navigation";

const Users = ({ users }: { users: any[] }) => {

  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user: any) => (
          <div
            onClick={() => {
              console.log(`User clicked: ${user.first_name} ${user.last_name}`);
              router.push(`/users/${user.id}`);
            }}
            key={user.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
            <div className="flex flex-col items-start space-y-4">
              <div className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-black/40"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  {user.first_name} {user.last_name}
                </p>
                <p className="mt-1 text-sm text-gray-400">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;