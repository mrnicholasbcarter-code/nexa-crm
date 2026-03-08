import { currentUser } from "@clerk/nextjs/server";
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Clock,
  ArrowUpRight,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardPage() {
  const user = await currentUser();

  const stats = [
    {
      label: "Active Deals",
      value: "12",
      icon: Briefcase,
      trend: "+2.5%",
      subtext: "from last month",
    },
    {
      label: "Pipeline Value",
      value: "$420,000",
      icon: TrendingUp,
      trend: "+15%",
      subtext: "from last month",
    },
    {
      label: "Close Rate",
      value: "24%",
      icon: Users,
      trend: "+4.2%",
      subtext: "from last month",
    },
    {
      label: "Avg. Deal Age",
      value: "18 days",
      icon: Clock,
      trend: "-2 days",
      subtext: "improvement",
    },
  ];

  return (
    <div className="p-8 h-full space-y-8 bg-black">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Welcome back, {user?.firstName}</h2>
          <p className="text-zinc-400">Here's what's happening with your deals today.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-white text-black hover:bg-zinc-200" asChild>
            <Link href="/dashboard/deals/new">
              <Plus className="mr-2 h-4 w-4" />
              New Deal
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/5 bg-zinc-900/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <stat.icon className="h-4 w-4 text-zinc-400" />
              <div className="flex items-center text-xs font-medium text-emerald-500">
                {stat.trend}
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-zinc-400">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              <p className="mt-1 text-xs text-zinc-500">{stat.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-xl border border-white/5 bg-zinc-900/30 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Pipeline Overview</h3>
          <div className="h-[300px] flex items-center justify-center border border-dashed border-zinc-800 rounded-lg">
            <p className="text-zinc-500">Chart rendering area</p>
          </div>
        </div>
        <div className="col-span-3 rounded-xl border border-white/5 bg-zinc-900/30 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-zinc-400">
                  {i}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Deal "Project X" moved to Qualified</p>
                  <p className="text-xs text-zinc-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
