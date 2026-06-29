/**
 * Layered ambient backdrop: deep gradient base, two drifting "aurora" glows,
 * a faint technical grid, and a film-grain overlay. Purely decorative.
 */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-20 overflow-hidden pointer-events-none"
    >
      {/* Base vertical wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#15131f_0%,#06070d_55%,#06070d_100%)]" />

      {/* Drifting aurora glows */}
      <div className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--color-primary)_40%,transparent)_0%,transparent_60%)] blur-3xl animate-aurora" />
      <div className="absolute top-1/3 -right-32 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--color-accent)_30%,transparent)_0%,transparent_62%)] blur-3xl animate-aurora-2" />
      <div className="absolute bottom-[-12rem] left-1/4 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--color-primary-deep)_28%,transparent)_0%,transparent_64%)] blur-3xl animate-aurora" />

      {/* Technical grid, faded toward edges */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(100%_70%_at_50%_0%,black,transparent_75%)]" />

      {/* Film grain */}
      <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay" />

      {/* Bottom fade into base */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#06070d] to-transparent" />
    </div>
  );
}
