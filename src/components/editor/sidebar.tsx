"use client";

import { ThemeTokens } from "@/app/page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download, RefreshCcw, Palette, Layout } from "lucide-react";

interface SidebarProps {
  tokens: ThemeTokens;
  onChange: (tokens: ThemeTokens) => void;
}

export function Sidebar({ tokens, onChange }: SidebarProps) {
  const updateToken = (key: keyof ThemeTokens, value: string | number) => {
    onChange({ ...tokens, [key]: value });
  };

  const handleReset = () => {
    onChange({
      primary: "260 80% 60%",
      secondary: "260 20% 20%",
      accent: "180 100% 50%",
      radius: 8,
    });
  };

  return (
    <div className="h-full flex flex-col bg-zinc-950">
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <h2 className="font-bold text-lg">Theme Editor</h2>
        <Button variant="ghost" size="icon" onClick={handleReset} className="h-8 w-8 text-zinc-500">
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="w-full bg-white/5 border border-white/10 mb-8 p-1">
            <TabsTrigger value="colors" className="flex-1 gap-2">
              <Palette className="h-4 w-4" />
              Colors
            </TabsTrigger>
            <TabsTrigger value="layout" className="flex-1 gap-2">
              <Layout className="h-4 w-4" />
              Layout
            </TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-8">
            <div className="space-y-4">
              <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Primary Color</Label>
              <div className="flex gap-3 items-center">
                <div 
                  className="h-10 w-10 rounded-lg shrink-0 border border-white/10" 
                  style={{ backgroundColor: `hsl(${tokens.primary})` }}
                />
                <input 
                  type="text" 
                  value={tokens.primary}
                  onChange={(e) => updateToken("primary", e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Secondary Color</Label>
              <div className="flex gap-3 items-center">
                <div 
                  className="h-10 w-10 rounded-lg shrink-0 border border-white/10" 
                  style={{ backgroundColor: `hsl(${tokens.secondary})` }}
                />
                <input 
                  type="text" 
                  value={tokens.secondary}
                  onChange={(e) => updateToken("secondary", e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Accent Color</Label>
              <div className="flex gap-3 items-center">
                <div 
                  className="h-10 w-10 rounded-lg shrink-0 border border-white/10" 
                  style={{ backgroundColor: `hsl(${tokens.accent})` }}
                />
                <input 
                  type="text" 
                  value={tokens.accent}
                  onChange={(e) => updateToken("accent", e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="layout" className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Border Radius</Label>
                <span className="text-xs font-mono text-zinc-400">{tokens.radius}px</span>
              </div>
              <Slider 
                value={[tokens.radius]} 
                max={24} 
                step={1} 
                onValueChange={([val]) => updateToken("radius", val)}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="p-6 border-t border-white/10">
        <Button className="w-full gap-2 bg-white text-black hover:bg-zinc-200">
          <Download className="h-4 w-4" />
          Export Theme
        </Button>
      </div>
    </div>
  );
}
