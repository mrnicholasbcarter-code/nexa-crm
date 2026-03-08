"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex aspect-square h-8 items-center justify-center rounded-lg bg-white">
            <LayoutDashboard className="h-5 w-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Nexa</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <div className="flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Features</Link>
            <Link href="#pricing" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Pricing</Link>
            <Link href="#about" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">About</Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                <Link href="/sign-in">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button className="bg-white text-black hover:bg-zinc-200" asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-white/10 hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-b border-white/5 bg-black md:hidden"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="#features"
                className="block rounded-md px-3 py-2 text-base font-medium text-zinc-400 hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="block rounded-md px-3 py-2 text-base font-medium text-zinc-400 hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/sign-in"
                className="block rounded-md px-3 py-2 text-base font-medium text-zinc-400 hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-white text-black hover:bg-zinc-200" asChild>
                  <Link href="/sign-up" onClick={() => setIsOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
