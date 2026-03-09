"use client";

import { useState } from "react";
import { Sidebar } from "@/components/editor/sidebar";
import { Preview } from "@/components/editor/preview";
import { ThemeProvider } from "@/components/editor/theme-provider";

export interface ThemeTokens {
  primary: string;
  secondary: string;
  accent: string;
  radius: number;
}

const DEFAULT_THEME: ThemeTokens = {
  primary: "260 80% 60%", // HSL
  secondary: "260 20% 20%",
  accent: "180 100% 50%",
  radius: 8,
};

export default function ThemeBuilderPage() {
  const [tokens, setTokens] = useState<ThemeTokens>(DEFAULT_THEME);

  return (
    <ThemeProvider tokens={tokens}>
      <div className="flex h-screen w-full overflow-hidden bg-black text-white">
        {/* Editor Sidebar */}
        <div className="w-80 border-r border-white/10 shrink-0">
          <Sidebar tokens={tokens} onChange={setTokens} />
        </div>

        {/* Live Preview Area */}
        <div className="flex-1 relative overflow-auto bg-zinc-950 p-8">
          <div className="max-w-6xl mx-auto h-full">
            <Preview />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
