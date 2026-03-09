"use client";

import { useState } from "react";
import { DealCard } from "./deal-card";
import { Plus, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewDealDialog } from "./new-deal-dialog";

const COLUMNS = [
  { id: "lead", title: "Leads" },
  { id: "qualified", title: "Qualified" },
  { id: "proposal", title: "Proposal" },
  { id: "won", title: "Won" },
  { id: "lost", title: "Lost" },
];

export const KanbanBoard = ({ initialDeals, workspaceId }: { initialDeals: any[], workspaceId: string }) => {
  const [deals, setDeals] = useState(initialDeals);

  return (
    <div className="flex h-full gap-6 overflow-x-auto pb-4 scrollbar-hide">
      {COLUMNS.map((column) => (
        <div 
          key={column.id} 
          className="flex min-w-[300px] flex-col rounded-2xl bg-zinc-950/50 p-4 border border-white/5"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">{column.title}</h3>
              <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-bold text-zinc-500">
                {deals.filter((d) => d.status === column.id).length}
              </span>
            </div>
            <button className="text-zinc-500 hover:text-white transition-colors">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-4 overflow-y-auto pr-1">
            {deals
              .filter((deal) => deal.status === column.id)
              .map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            
            <NewDealDialog workspaceId={workspaceId} />
          </div>
        </div>
      ))}
    </div>
  );
};
