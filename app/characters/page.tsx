import { StudioHeader } from "@/components/StudioHeader";

export default function CharactersPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <StudioHeader
        eyebrow="CHARACTERS"
        title="Keep your people consistent."
        description="Characters will store visual references, identity notes, styling preferences, and generation defaults so you can reuse the same person across shoots and scenes."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <button className="min-h-72 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-left transition hover:border-violet-300/30 hover:bg-white/[0.04]">
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl">＋</div>
          <div className="mt-20 text-lg font-medium">Create character</div>
          <p className="mt-2 text-sm leading-6 text-white/40">
            Add reference images and build a reusable visual identity.
          </p>
        </button>
      </div>
    </div>
  );
}
