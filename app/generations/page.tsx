import { StudioHeader } from "@/components/StudioHeader";

export default function GenerationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <StudioHeader
        eyebrow="GENERATIONS"
        title="Your creative history, without the chaos."
        description="Every finished and in-progress generation will appear here with its prompt, character, model, project, and status."
      />

      <div className="grid min-h-80 place-items-center rounded-3xl border border-dashed border-white/15 bg-white/[0.025] text-center">
        <div>
          <div className="text-3xl">↺</div>
          <h2 className="mt-5 text-xl font-medium">Nothing here yet</h2>
          <p className="mt-2 text-sm text-white/40">
            Your first Kinora generation will show up here automatically.
          </p>
        </div>
      </div>
    </div>
  );
}
