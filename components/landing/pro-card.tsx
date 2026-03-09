"use client";

import { useState, useRef } from "react";
import { SuperfanzLogo } from "./logo";

interface ProCardProps {
  name?: string;
  title?: string;
  sport?: string;
  edition?: string;
  cardNumber?: string;
  stats?: { label: string; value: string }[];
  perks?: string[];
}

export function ProCard({
  name = "Evan Forster",
  title = "Forward",
  sport = "Basketball",
  edition = "Platinum Edition",
  cardNumber = "#0042",
  stats = [
    { label: "Games", value: "284" },
    { label: "Points", value: "18.4" },
    { label: "Assists", value: "7.2" },
    { label: "Rating", value: "94" },
  ],
  perks = [
    "VIP Courtside Access",
    "Signed Merchandise",
    "Exclusive Q&A Sessions",
    "Priority Trading Rights",
  ],
}: ProCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shimmer, setShimmer] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const maxTilt = 14;
    setTilt({
      x: (-dy / (rect.height / 2)) * maxTilt,
      y: (dx / (rect.width / 2)) * maxTilt,
    });
    setShimmer({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setShimmer({ x: 50, y: 50 });
  };

  return (
    <div className="flex flex-col items-center gap-6 select-none">
      {/* Card wrapper — perspective container */}
      <div
        ref={cardRef}
        className="relative cursor-pointer"
        style={{
          width: 340,
          height: 520,
          perspective: "1200px",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        aria-label="Flip Pro Card"
        onKeyDown={(e) => e.key === "Enter" && setIsFlipped((f) => !f)}
      >
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isFlipped
              ? `rotateY(180deg) rotateX(${tilt.x}deg)`
              : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* ── FRONT ── */}
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          >
            {/* Dark base */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(145deg, #111110 0%, #0a0a09 60%, #161512 100%)" }}
            />

            {/* Athlete photo */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/evan-forster.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0) 90%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0) 90%)",
              }}
            />

            {/* Holographic shimmer layer */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at ${shimmer.x}% ${shimmer.y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
                transition: "background 0.1s ease",
              }}
            />
            {/* Rainbow prism shimmer */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none opacity-20"
              style={{
                background: `conic-gradient(from ${shimmer.x * 3.6}deg at ${shimmer.x}% ${shimmer.y}%, #ff6b6b22, #ffd93d22, #6bcb7722, #4d96ff22, #ff6bff22, #ff6b6b22)`,
                mixBlendMode: "screen",
                transition: "background 0.1s ease",
              }}
            />

            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-5">
              <SuperfanzLogo size={32} />
              <span
                className="font-mono text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {edition}
              </span>
            </div>

            {/* Card number top-right chip */}
            <div
              className="absolute top-5 right-5 font-mono text-[10px] tracking-widest"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
            </div>

            {/* Bottom identity block */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-6">
              {/* Thin rule */}
              <div
                className="w-8 mb-3"
                style={{ height: 1, background: "rgba(255,255,255,0.3)" }}
              />
              <p
                className="font-mono text-[10px] tracking-[0.25em] uppercase mb-1"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {sport} · {title}
              </p>
              <h2
                className="font-display text-4xl leading-none mb-4"
                style={{ color: "#fff", letterSpacing: "-0.01em" }}
              >
                {name}
              </h2>

              {/* Stats row */}
              <div className="flex gap-5">
                {stats.slice(0, 4).map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <span
                      className="font-display text-xl leading-none"
                      style={{ color: "#fff" }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="font-mono text-[9px] tracking-widest uppercase"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card number bottom */}
              <div
                className="mt-4 font-mono text-[9px] tracking-[0.3em]"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                SUPERFANZ PRO · {cardNumber}
              </div>
            </div>

            {/* Embossed border */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            />
          </div>

          {/* ── BACK ── */}
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Dark base */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(145deg, #0e0e0d 0%, #111110 100%)" }}
            />

            {/* Subtle grid texture */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)",
              }}
            />

            {/* Holographic shimmer layer (back) */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at ${100 - shimmer.x}% ${shimmer.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
                transition: "background 0.1s ease",
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col px-6 pt-6 pb-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <SuperfanzLogo size={28} />
                <span
                  className="font-mono text-[9px] tracking-[0.25em] uppercase"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  Pro Card
                </span>
              </div>

              {/* Name */}
              <div className="mb-6">
                <p
                  className="font-mono text-[10px] tracking-[0.2em] uppercase mb-1"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Card Holder
                </p>
                <h3
                  className="font-display text-2xl"
                  style={{ color: "#fff" }}
                >
                  {name}
                </h3>
              </div>

              {/* Divider */}
              <div
                className="w-full mb-6"
                style={{ height: "1px", background: "rgba(255,255,255,0.08)" }}
              />

              {/* Full stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl px-4 py-3 flex flex-col gap-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      className="font-display text-2xl leading-none"
                      style={{ color: "#fff" }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="font-mono text-[9px] tracking-widest uppercase"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div
                className="w-full mb-4"
                style={{ height: "1px", background: "rgba(255,255,255,0.08)" }}
              />

              {/* Perks */}
              <div className="flex-1">
                <p
                  className="font-mono text-[9px] tracking-[0.2em] uppercase mb-3"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Member Perks
                </p>
                <ul className="flex flex-col gap-2">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5">
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: "rgba(255,255,255,0.5)" }}
                      />
                      <span
                        className="font-sans text-xs"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div
                className="mt-auto pt-4 font-mono text-[9px] tracking-[0.3em]"
                style={{ color: "rgba(255,255,255,0.15)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                SUPERFANZ PRO · {cardNumber} · VERIFIED AUTHENTIC
              </div>
            </div>

            {/* Embossed border */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            />
          </div>
        </div>

        {/* Card outer glow */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            boxShadow: isFlipped
              ? "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)"
              : "0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
            transition: "box-shadow 0.75s ease",
          }}
        />
      </div>

      {/* Flip hint */}
      <p
        className="font-mono text-[10px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(0,0,0,0.3)" }}
      >
        {isFlipped ? "Click to flip back" : "Click card to reveal"}
      </p>
    </div>
  );
}
