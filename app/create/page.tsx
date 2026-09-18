import { StudioHeader } from "@/components/StudioHeader";

export default function CreatePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <StudioHeader
        eyebrow="CREATE"
        title="One prompt. A whole visual world."
        description="This is the first Kinora generation surface. The controls are ready for us to wire into image and video models next."
      />

      <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
          <label className="text-xs uppercase tracking-[0.2em] text-white/40">Prompt</label>
          <textarea
            placeholder="Describe what you want Kinora to create..."
            className="mt-3 min-h-48 w-full resize-none rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-violet-300/40"
          />

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Field label="Mode" value="Image" />
            <Field label="Character" value="None selected" />
            <Field label="Aspect ratio" value="4:5 Portrait" />
            <Field label="Outputs" value="4 images" />
          </div>

          <button className="mt-6 w-full rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-black transition hover:bg-violet-100">
            Generate ✦
          </button>
        </section>

        <aside className="space-y-5">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">Visual direction</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Cinematic", "Y2K Editorial", "Studio", "Music Video", "Dreamy", "Raw"].map((style) => (
                <button
                  key={style}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/55 hover:border-violet-300/25 hover:text-white"
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-violet-300/15 bg-violet-400/[0.06] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-violet-200/60">v0.1 status</div>
            <p className="mt-3 text-sm leading-6 text-white/50">
              UI ready. Model routing, uploads, job status, and asset saving come next.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <button className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-left">
      <span>
        <span className="block text-[10px] uppercase tracking-[0.18em] text-white/30">{label}</span>
        <span className="mt-1 block text-sm text-white/70">{value}</span>
      </span>
      <span className="text-white/25">⌄</span>
    </button>
  );
}
