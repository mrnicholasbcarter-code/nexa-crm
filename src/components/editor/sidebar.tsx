"use client";

import { ThemeTokens } from "@/app/page";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Palette, Layers, Download, RefreshCcw } from "lucide-react";

export const Sidebar = ({ tokens, onChange }: { tokens: ThemeTokens, onChange: (t: ThemeTokens) => void }) => {
  return (
    <div className="flex flex-col h-full p-6 space-y-8 bg-zinc-900/50">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
          <Palette className="h-5 w-5 text-black" />
        </div>
        <h1 className="text-xl font-bold tracking-tight">Theme Builder</h1>
      </div>

      <Tabs defaultValue="colors" className="flex-1">
        <TabsList className="w-full bg-white/5 border border-white/10 mb-6">
          <TabsTrigger value="colors" className="flex-1 gap-2">
            <Palette className="h-4 w-4" />
            Colors
          </TabsTrigger>
          <TabsTrigger value="layout" className="flex-1 gap-2">
            <Layers className="h-4 w-4" />
            Layout
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-8">
          <div className="space-y-4">
            <Label className="text-zinc-400">Primary Color (HSL)</Label>
            <Slider 
              max={360} 
              step={1} 
              defaultValue={[260]} 
              onValueChange={(v: number[]) => onChange({ ...tokens, primary: `${v[0]} 80% 60%` })}
            />
          </div>

          <div className="space-y-4">
            <Label className="text-zinc-400">Accent Color (HSL)</Label>
            <Slider 
              max={360} 
              step={1} 
              defaultValue={[180]} 
              onValueChange={(v: number[]) => onChange({ ...tokens, accent: `${v[0]} 100% 50%` })}
            />
          </div>
        </TabsContent>

        <TabsContent value="layout" className="space-y-8">
          <div className="space-y-4">
            <Label className="text-zinc-400">Border Radius ({tokens.radius}px)</Label>
            <Slider 
              max={24} 
              step={1} 
              defaultValue={[8]} 
              onValueChange={(v: number[]) => onChange({ ...tokens, radius: v[0] })}
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="pt-6 border-t border-white/10 space-y-3">
        <Button className="w-full bg-white text-black hover:bg-zinc-200 gap-2">
          <Download className="h-4 w-4" />
          Export Tailwind
        </Button>
        <Button variant="ghost" className="w-full text-zinc-400 hover:text-white gap-2">
          <RefreshCcw className="h-4 w-4" />
          Reset Defaults
        </Button>
      </div>
    </div>
  );
};
