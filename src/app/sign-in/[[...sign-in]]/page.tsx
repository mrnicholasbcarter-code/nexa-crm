import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <SignIn 
        appearance={{
          elements: {
            formButtonPrimary: "bg-white text-black hover:bg-zinc-200 transition-colors",
            card: "bg-zinc-950 border border-white/10 shadow-2xl",
            headerTitle: "text-white",
            headerSubtitle: "text-zinc-400",
            socialButtonsBlockButton: "bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors",
            socialButtonsBlockButtonText: "text-white",
            formFieldLabel: "text-zinc-400",
            formFieldInput: "bg-white/5 border border-white/10 text-white",
            footerActionText: "text-zinc-400",
            footerActionLink: "text-white hover:text-zinc-200",
            dividerText: "text-zinc-500",
            dividerLine: "bg-zinc-800",
            identityPreviewText: "text-white",
            identityPreviewEditButtonIcon: "text-zinc-400"
          }
        }}
      />
    </div>
  );
}
