<<<<<<< HEAD
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, LayoutDashboard, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-zinc-900/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-zinc-800/20 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-zinc-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-200"></span>
              </span>
              Now in Private Beta
            </div>
            
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
              Manage your deals with{" "}
              <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                absolute clarity
              </span>
            </h1>
            
            <p className="mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl">
              The CRM designed for modern teams who value speed, design, and precision. 
              Track workflows, automate follow-ups, and close more deals.
            </p>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
              <Button size="lg" className="h-12 border-none bg-white px-8 text-base font-semibold text-black hover:bg-zinc-200" asChild>
                <Link href="/sign-up">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="h-12 text-base font-semibold text-white hover:bg-white/10" asChild>
                <Link href="#features">Explore Features</Link>
              </Button>
            </div>

            {/* Dashboard Preview Mockup */}
            <div className="relative mt-20 w-full max-w-6xl">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-2 backdrop-blur-3xl">
                <div className="rounded-xl border border-white/5 bg-zinc-950 p-1">
                  <div className="flex h-[400px] w-full items-center justify-center rounded-lg bg-zinc-900 shadow-2xl sm:h-[600px]">
                    <LayoutDashboard className="h-20 w-20 text-zinc-800" />
                  </div>
                </div>
              </div>
              {/* Floating Decorative Elements */}
              <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute -right-12 -bottom-12 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            </div>
          </div>

          {/* Feature Highlights Overlay */}
          <div className="mt-32 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Built for speed. No more waiting for dashboards to load." },
              { icon: Shield, title: "Secure by Default", desc: "Enterprise-grade security for your customer data." },
              { icon: Users, title: "Team Focused", desc: "Seamless collaboration across departments." },
            ].map((feature, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/30 p-8 transition-colors hover:bg-zinc-900/50">
                <div className="mb-4 flex aspect-square h-12 items-center justify-center rounded-lg bg-white/10 text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-zinc-500">{feature.desc}</p>
              </div>
            ))}
          </div>
=======
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
>>>>>>> b53af87 (Initial commit from Create Next App)
        </div>
      </main>
    </div>
  );
}
