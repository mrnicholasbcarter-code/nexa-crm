"use client";

import { motion } from "framer-motion";
import { MoreVertical, Calendar, DollarSign, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Deal {
  id: string;
  title: string;
  value: string | null;
  status: string;
  createdAt: Date;
}

export const DealCard = ({ deal }: { deal: Deal }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative cursor-grab rounded-xl border border-white/5 bg-zinc-900/60 p-4 shadow-sm transition-all hover:border-white/10 hover:bg-zinc-900/80 active:cursor-grabbing"
    >
      <div className="flex items-start justify-between">
        <h4 className="text-sm font-semibold text-white line-clamp-2">{deal.title}</h4>
        <button className="rounded-md p-1 text-zinc-500 hover:bg-white/5 hover:text-white">
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>
      
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center text-xs text-zinc-400">
          <DollarSign className="mr-1.5 h-3.5 w-3.5 text-emerald-500" />
          <span className="font-medium text-zinc-300">{deal.value || "$0.00"}</span>
        </div>
        <div className="flex items-center text-xs text-zinc-500">
          <Calendar className="mr-1.5 h-3.5 w-3.5" />
          <span>{new Date(deal.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center">
            <User className="h-3 w-3 text-zinc-400" />
          </div>
          <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Unassigned</span>
        </div>
      </div>
    </motion.div>
  );
};
