import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";



export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }

  return (
    <div className="flex items-center h-full justify-center bg-zinc-900">
      <div className="flex flex-col bg-zinc-900 bg-opacity-50">
        <h1 className="text-3xl md:text-6-l text-white text-center">Who is watching?</h1>
      
      <div className="flex items-center justify-center gap-8 mt-10">
        <div>
          <div className="group flex-row w-44 mx-auto">
            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-red-600 overflow-hidden">
              <img src="/images/profile.webp" alt="profile" />
            </div>
            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
              {session.user.name}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}