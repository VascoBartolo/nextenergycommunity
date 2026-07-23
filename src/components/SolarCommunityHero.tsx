import { useEffect, useState } from "react";

/**
 * The community's signature hero visual — deliberately distinct from the group
 * site's rotating constellation. Instead of a central hub with orbiting nodes,
 * this is a *scene*: the sun lights a producer's rooftop solar array, and
 * discrete packets of energy stream along arcs out to the member buildings of
 * the community (produce → share → consume), told left-to-right.
 */

const RAYS = Array.from({ length: 12 }, (_, i) => i);

// Consumer buildings are nudged apart on phones (where the graphic — and its
// labels — scale down) so the labels don't crowd. Desktop keeps offset 0.
// Order: [Habitação, Comércio, Entidade Pública].
const PHONE_SHIFT = [-26, -8, 4] as const;

// Energy-sharing arcs from the producer's roof (P) to each member rooftop.
// `shift` moves each arc's end (and last control point) with its building.
const buildArcs = (shift: readonly number[]) => [
  { id: "arc-1", d: `M112,250 C 168,150 ${232 + shift[0]},170 ${278 + shift[0]},270`, packets: 2 },
  { id: "arc-2", d: `M112,250 C 190,150 ${306 + shift[1]},196 ${350 + shift[1]},300`, packets: 2 },
  { id: "arc-3", d: `M112,250 C 214,120 ${384 + shift[2]},150 ${424 + shift[2]},284`, packets: 3 },
];

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);
  return reduced;
};

const useIsPhone = () => {
  const [phone, setPhone] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(max-width: 639.98px)");
    const update = () => setPhone(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);
  return phone;
};

const SolarCommunityHero = () => {
  const reduced = usePrefersReducedMotion();
  const isPhone = useIsPhone();
  const shift = isPhone ? PHONE_SHIFT : [0, 0, 0];
  const arcs = buildArcs(shift);

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* warm solar wash behind the scene */}
      <div className="absolute left-[14%] top-[6%] w-40 h-40 bg-solar-glow blur-2xl rounded-full pointer-events-none" />

      <svg viewBox="0 0 480 400" className="relative w-full h-auto" role="img" aria-label="Uma comunidade de energia: o sol alimenta os painéis do produtor, que partilha energia com os membros">
        <defs>
          {/* Literal HSL (not var(--brand-orange)/var(--brand-red)) so the sun,
              rays and arcs paint correctly on the very first frame — these two
              brand colors are theme-invariant (unchanged in .dark), so nothing
              is lost, and the SVG no longer waits on the stylesheet to resolve
              CSS custom properties, which was causing a visible flash/artifact
              on refresh before the colors "popped" in. */}
          <radialGradient id="sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(38 96% 62%)" />
            <stop offset="60%" stopColor="hsl(22 87% 59%)" />
            <stop offset="100%" stopColor="hsl(351 73% 48%)" />
          </radialGradient>
          <linearGradient id="ray" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(22 87% 59%)" />
            <stop offset="100%" stopColor="hsl(351 73% 48%)" />
          </linearGradient>
          <linearGradient id="arcStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(22 87% 59%)" />
            <stop offset="100%" stopColor="hsl(351 73% 48%)" />
          </linearGradient>
          <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(214 32% 24%)" />
            <stop offset="100%" stopColor="hsl(220 30% 14%)" />
          </linearGradient>
          <linearGradient id="ecoPanel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(200 45% 26%)" />
            <stop offset="100%" stopColor="hsl(220 34% 13%)" />
          </linearGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* ── SUN ──────────────────────────────────────────── */}
        <g>
          <circle cx="104" cy="92" r="58" fill="hsl(22 87% 59%)" opacity="0.16" filter="url(#soft)" />
          <g
            className={reduced ? "" : "animate-spin"}
            style={{ animationDuration: "48s", transformBox: "fill-box", transformOrigin: "center" }}
          >
            {RAYS.map((i) => {
              const a = (i * 30 * Math.PI) / 180;
              const x1 = 104 + Math.cos(a) * 44;
              const y1 = 92 + Math.sin(a) * 44;
              const x2 = 104 + Math.cos(a) * 62;
              const y2 = 92 + Math.sin(a) * 62;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#ray)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className={reduced ? "" : "animate-ray-pulse"}
                  style={{ animationDelay: `${i * 160}ms` }}
                />
              );
            })}
          </g>
          <circle cx="104" cy="92" r="34" fill="url(#sun)" className={reduced ? "" : "animate-sun-breathe"} />
          <circle cx="104" cy="92" r="34" fill="none" stroke="hsl(38 96% 70%)" strokeWidth="1.5" opacity="0.5" />
        </g>

        {/* ── ENERGY-SHARING ARCS + PACKETS ────────────────── */}
        {arcs.map((arc) => (
          <path key={arc.id} id={arc.id} d={arc.d} fill="none" stroke="url(#arcStroke)" strokeWidth="1.5" strokeDasharray="2 7" opacity="0.4" />
        ))}
        {/* `opacity="0"` on each packet (not just inside its <animate>) matters:
            a packet with a delayed `begin` sits at its default (0,0) position —
            off in the corner of the scene — until its animateMotion starts.
            Without a static base opacity, it renders fully visible there for a
            frame, which was exactly the stray-dot artifact seen on refresh. */}
        {!reduced &&
          arcs.map((arc) =>
            Array.from({ length: arc.packets }, (_, k) => (
              <circle key={`${arc.id}-p${k}`} r="4" fill="hsl(38 96% 62%)" opacity="0">
                <animate attributeName="opacity" values="0;1;1;0" dur="3.2s" begin={`${(k / arc.packets) * 3.2}s`} repeatCount="indefinite" />
                <animateMotion dur="3.2s" begin={`${(k / arc.packets) * 3.2}s`} repeatCount="indefinite" rotate="auto">
                  <mpath href={`#${arc.id}`} />
                </animateMotion>
              </circle>
            )),
          )}

        {/* ── GROUND ───────────────────────────────────────── */}
        <line x1="20" y1="356" x2="460" y2="356" stroke="hsl(var(--border))" strokeWidth="2" />

        {/* ── PRODUCER HOUSE (eco-highlighted) ─────────────── */}
        <g>
          <ellipse cx="112" cy="352" rx="72" ry="10" fill="hsl(var(--eco))" opacity="0.12" />
          {/* walls */}
          <rect x="80" y="300" width="66" height="56" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
          <rect x="98" y="322" width="16" height="34" rx="2" fill="hsl(var(--eco))" opacity="0.85" />
          {/* pitched solar roof */}
          <polygon points="72,302 154,302 138,262 88,262" fill="url(#ecoPanel)" stroke="hsl(var(--eco))" strokeWidth="1.5" />
          {/* panel grid */}
          <g stroke="hsl(var(--eco))" strokeWidth="0.8" opacity="0.55">
            <line x1="99" y1="264" x2="83" y2="300" />
            <line x1="113" y1="264" x2="105" y2="300" />
            <line x1="127" y1="264" x2="127" y2="300" />
            <line x1="82" y1="284" x2="146" y2="284" />
          </g>
          {/* generation glow at the roof source */}
          <circle cx="112" cy="250" r="6" fill="hsl(38 96% 62%)" className={reduced ? "" : "animate-pulse-glow"} />
          <text x="112" y="378" textAnchor="middle" fontSize="11" fontWeight="600" className="font-sub hero-svg-label" fill="hsl(var(--eco))">Produtor</text>
        </g>

        {/* ── MEMBER BUILDINGS ─────────────────────────────── */}
        {/* Habitação — apartment */}
        <g transform={`translate(${shift[0]} 0)`}>
          <rect x="252" y="272" width="52" height="84" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
          <rect x="262" y="258" width="32" height="16" rx="2" fill="url(#panel)" stroke="hsl(var(--brand-orange))" strokeWidth="1" opacity="0.95" />
          <g fill="hsl(var(--brand-orange))" opacity="0.28">
            <rect x="260" y="284" width="12" height="12" rx="1.5" />
            <rect x="284" y="284" width="12" height="12" rx="1.5" />
            <rect x="260" y="304" width="12" height="12" rx="1.5" />
            <rect x="284" y="304" width="12" height="12" rx="1.5" />
            <rect x="260" y="324" width="12" height="12" rx="1.5" />
            <rect x="284" y="324" width="12" height="12" rx="1.5" />
          </g>
          <text x="278" y="378" textAnchor="middle" fontSize="11" fontWeight="600" className="font-sub hero-svg-label" fill="hsl(var(--muted-foreground))">Habitação</text>
        </g>

        {/* Comércio — shop */}
        <g transform={`translate(${shift[1]} 0)`}>
          <rect x="320" y="306" width="60" height="50" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
          <rect x="332" y="292" width="36" height="16" rx="2" fill="url(#panel)" stroke="hsl(var(--brand-orange))" strokeWidth="1" opacity="0.95" />
          <rect x="328" y="318" width="44" height="14" rx="2" fill="hsl(var(--brand-red))" opacity="0.7" />
          <rect x="330" y="336" width="18" height="20" fill="hsl(var(--brand-orange))" opacity="0.25" />
          <text x="350" y="378" textAnchor="middle" fontSize="11" fontWeight="600" className="font-sub hero-svg-label" fill="hsl(var(--muted-foreground))">Comércio</text>
        </g>

        {/* Entidade pública — civic building */}
        <g transform={`translate(${shift[2]} 0)`}>
          <rect x="396" y="292" width="64" height="64" rx="3" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
          <rect x="404" y="278" width="48" height="15" rx="2" fill="url(#panel)" stroke="hsl(var(--brand-orange))" strokeWidth="1" opacity="0.95" />
          <polygon points="396,278 460,278 428,262" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1" />
          <g stroke="hsl(var(--muted-foreground))" strokeWidth="3" opacity="0.5">
            <line x1="408" y1="300" x2="408" y2="350" />
            <line x1="422" y1="300" x2="422" y2="350" />
            <line x1="436" y1="300" x2="436" y2="350" />
            <line x1="450" y1="300" x2="450" y2="350" />
          </g>
          <text x="428" y="378" textAnchor="middle" fontSize="11" fontWeight="600" className="font-sub hero-svg-label" fill="hsl(var(--muted-foreground))">Ent. Pública</text>
        </g>
      </svg>
    </div>
  );
};

export default SolarCommunityHero;
