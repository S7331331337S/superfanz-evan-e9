import { ProCard } from "./pro-card";
import { CardSegmentPreviews } from "./card-segment-previews";

export function ProCardSection() {
  return (
    <section
      id="pro-card"
      className="relative py-32 flex flex-col items-center overflow-hidden"
      style={{ background: "oklch(0.96 0.005 90)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 59px, currentColor 59px, currentColor 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, currentColor 59px, currentColor 60px)",
        }}
      />

      {/* Label */}
      <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
        Superfanz Pro
      </p>

      <h2 className="font-display text-5xl md:text-6xl text-center mb-3 text-balance leading-none">
        Your Pro Card
      </h2>
      <p className="text-muted-foreground text-center max-w-sm mb-16 leading-relaxed">
        A limited-edition collectible with real-world perks. Hover to feel it. Click to flip it.
      </p>

      <ProCard />
      <CardSegmentPreviews />
    </section>
  );
}
