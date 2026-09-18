import { StudioHeader } from "@/components/StudioHeader";
import { SupabaseStatus } from "@/components/SupabaseStatus";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <StudioHeader
        eyebrow="SETTINGS"
        title="The wiring behind Kinora."
        description="Check connected services and the infrastructure powering your private creative studio."
      />

      <div className="space-y-5">
        <SupabaseStatus />

        <section className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40">Coming next</div>
          <h2 className="mt-3 text-xl font-medium">Auth, characters, projects, and storage.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
            Once this connection is green, Kinora can start using Supabase for private login,
            reusable character data, project records, generation history, and uploaded assets.
          </p>
        </section>
      </div>
    </div>
  );
}
