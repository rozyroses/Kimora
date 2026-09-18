import Link from "next/link";
import { StudioHeader } from "@/components/StudioHeader";

const tools = [
  {
    href: "/create",
    title: "Create",
    description: "Generate images, edits, and motion from one workspace.",
    tag: "studio",
  },
  {
    href: "/characters",
    title: "Characters",
    description: "Save reference identities so your visual worlds stay consistent.",
    tag: "identity",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Keep campaigns, shoots, videos, and experiments organized.",
    tag: "workspace",
  },
  {
    href: "/generations",
    title: "Generations",
    description: "Browse everything Kinora creates and jump back into an idea.",
    tag: "history",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <div className="mb-8 flex items-center justify-between">
        <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/45">
          private beta
        </div>
        <div className="text-xs text-white/35">v0.1 foundation</div>
      </div>

      <StudioHeader
        eyebrow="YOUR CREATIVE OS"
        title="Make the visual. Keep the world."
        description="Kinora is your private AI creative studio for building images, motion, characters, and complete visual projects without bouncing between a bunch of tools."
      />

      <section className="grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-0.5 hover:border-violet-300/25 hover:bg-white/[0.055]"
          >
            <div className="mb-10 flex items-start justify-between">
              <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-white/35">
                {tool.tag}
              </span>
              <span className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:text-white">↗</span>
            </div>
            <h2 className="text-2xl font-medium">{tool.title}</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/45">{tool.description}</p>
          </Link>
        ))}
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-[#0d0f13]/80 p-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h3 className="font-medium">Recent work</h3>
              <p className="mt-1 text-xs text-white/35">Your newest visual experiments will live here.</p>
            </div>
            <Link href="/generations" className="text-xs text-violet-300/70 hover:text-violet-200">
              view all
            </Link>
          </div>
          <div className="grid min-h-52 place-items-center rounded-2xl border border-dashed border-white/10 bg-black/20 text-center">
            <div>
              <div className="text-2xl">✦</div>
              <p className="mt-3 text-sm text-white/45">No generations yet.</p>
              <Link href="/create" className="mt-3 inline-block text-xs text-violet-300">
                create your first visual
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-violet-400/10 to-white/[0.02] p-6">
          <div className="text-xs uppercase tracking-[0.22em] text-violet-200/60">next up</div>
          <h3 className="mt-4 text-xl font-medium">Connect the first image model.</h3>
          <p className="mt-3 text-sm leading-6 text-white/45">
            The interface is being built model-agnostic so we can swap providers later without rebuilding Kinora.
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-white/40">
            model router → generation job → saved asset → project
          </div>
        </div>
      </section>
    </div>
  );
}
