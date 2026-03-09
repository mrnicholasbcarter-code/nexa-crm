import { KanbanBoard } from "@/components/deals/kanban-board";
import { NewDealDialog } from "@/components/deals/new-deal-dialog";
import { Button } from "@/components/ui/button";
import { Filter, Download } from "lucide-react";
import { db } from "@/lib/db";
import { deals as dealsTable } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";
import { getOrCreateUserAndWorkspace } from "@/lib/db/utils";

export default async function DealsPage() {
  const context = await getOrCreateUserAndWorkspace();
  
  if (!context || !context.workspace) {
    return <div>Failed to load workspace</div>;
  }

  const { workspace } = context;

  // Fetch real deals from the database for this workspace
  let workspaceDeals: any[] = [];
  try {
    workspaceDeals = await db
      .select()
      .from(dealsTable)
      .where(eq(dealsTable.workspaceId, workspace.id))
      .orderBy(desc(dealsTable.createdAt));
  } catch (error) {
    console.error("Failed to fetch deals:", error);
  }

  return (
    <div className="flex flex-col h-full bg-black">
      <div className="border-b border-white/5 bg-zinc-950/50 p-8 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Deals</h1>
            <p className="text-sm text-zinc-400">Track and manage your sales pipeline for {workspace.name}.</p>
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
            <NewDealDialog workspaceId={workspace.id} />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-8">
        <KanbanBoard initialDeals={workspaceDeals} workspaceId={workspace.id} />
      </div>
    </div>
  );
}
