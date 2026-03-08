import { KanbanBoard } from "@/components/deals/kanban-board";
import { Button } from "@/components/ui/button";
import { Plus, Filter, Download } from "lucide-react";
import { db } from "@/lib/db";
import { deals } from "@/lib/db/schema";
import { desc } from "drizzle-orm";

export default async function DealsPage() {
  // Fetch real deals from the database
  let allDeals: any[] = [];
  try {
    allDeals = await db
      .select()
      .from(deals)
      .orderBy(desc(deals.createdAt));
  } catch (error) {
    console.error("Failed to fetch deals, using mock data:", error);
    // Mock data for demonstration if DB fails (e.g. no DATABASE_URL)
    allDeals = [
      { id: "1", title: "Enterprise Software License", value: "$50,000", status: "lead", createdAt: new Date() },
      { id: "2", title: "Cloud Migration Services", value: "$120,000", status: "qualified", createdAt: new Date() },
      { id: "3", title: "Support Contract Renewal", value: "$12,000", status: "proposal", createdAt: new Date() },
      { id: "4", title: "Training Workshop", value: "$5,500", status: "won", createdAt: new Date() },
    ];
  }

  return (
    <div className="flex flex-col h-full bg-black">
      <div className="border-b border-white/5 bg-zinc-950/50 p-8 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Deals</h1>
            <p className="text-sm text-zinc-400">Track and manage your sales pipeline with precision.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button className="bg-white text-black hover:bg-zinc-200">
              <Plus className="mr-2 h-4 w-4" />
              New Deal
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-8">
        <KanbanBoard initialDeals={allDeals} />
      </div>
    </div>
  );
}
