import { StudioHeader } from "@/components/StudioHeader";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <StudioHeader
        eyebrow="PROJECTS"
        title="Everything for a campaign, in one place."
        description="Projects are where Kinora will group cover art, photoshoots, videos, reels, references, and generation history around one creative idea."
      />

      <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.025] p-8 sm:p-10">
        <div className="max-w-lg">
          <div className="text-3xl">▦</div>
          <h2 className="mt-6 text-2xl font-medium">Create your first project</h2>
          <p className="mt-3 text-sm leading-6 text-white/45">
            Give it a name, attach characters, and let Kinora keep every asset and generation together.
          </p>
          <button className="mt-6 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black">
            New project
          </button>
        </div>
      </div>
    </div>
  );
}
