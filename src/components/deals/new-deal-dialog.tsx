"use client";

import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { createDeal } from "@/lib/actions/deals";
import { useRouter } from "next/navigation";

export const NewDealDialog = ({ workspaceId }: { workspaceId: string }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const values = {
      title: formData.get("title") as string,
      value: formData.get("value") as string,
      status: formData.get("status") as string,
      workspaceId,
    };

    try {
      await createDeal(values);
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-white text-black hover:bg-zinc-200">
          <Plus className="mr-2 h-4 w-4" />
          New Deal
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-950 border-white/10 text-white">
        <DialogHeader>
          <DialogTitle>Create New Deal</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-zinc-400">Deal Title</Label>
            <Input 
              id="title" 
              name="title" 
              required 
              placeholder="e.g. Enterprise License" 
              className="bg-white/5 border-white/10 focus:ring-white/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="value" className="text-zinc-400">Value</Label>
            <Input 
              id="value" 
              name="value" 
              placeholder="e.g. $50,000" 
              className="bg-white/5 border-white/10 focus:ring-white/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status" className="text-zinc-400">Initial Stage</Label>
            <Select name="status" defaultValue="lead">
              <SelectTrigger className="bg-white/5 border-white/10">
                <SelectValue placeholder="Select a stage" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-white/10 text-white">
                <SelectItem value="lead">Lead</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
                <SelectItem value="proposal">Proposal</SelectItem>
                <SelectItem value="won">Won</SelectItem>
                <SelectItem value="lost">Lost</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="pt-4">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => setOpen(false)}
              className="text-zinc-400 hover:text-white"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-white text-black hover:bg-zinc-200"
            >
              {loading ? "Creating..." : "Create Deal"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
