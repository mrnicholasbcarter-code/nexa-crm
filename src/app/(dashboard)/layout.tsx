import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative bg-black">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-zinc-950">
        <Sidebar />
      </div>
      <main className="md:pl-72 flex flex-col h-full">
        <div className="flex-1 h-full overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
