import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-base-100">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <span>Welcome {session?.user?.name}</span>
        </div>
      </nav>
      {children}
    </div>
  );
}
