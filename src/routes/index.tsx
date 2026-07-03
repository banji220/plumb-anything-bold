import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Droplets, Flame, ShowerHead, ArrowUpRight, Phone, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="border-b-2 border-ink">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
          <div className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-tight">
            <div className="grid h-9 w-9 place-items-center border-2 border-ink bg-brutal-yellow">
              <Wrench className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <span>Plumb_Anything///</span>
          </div>
          <nav className="hidden gap-8 font-mono text-xs font-bold uppercase md:flex">
            <a href="#services" className="hover:underline underline-offset-4">Services</a>
            <a href="#work" className="hover:underline underline-offset-4">Work</a>
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </nav>
          <a
            href="tel:+15555551234"
            className="hidden items-center gap-2 border-2 border-ink bg-ink px-4 py-2 font-mono text-xs font-bold uppercase text-paper transition-transform hover:-translate-y-0.5 md:flex"
          >
            <Phone className="h-3.5 w-3.5" /> (555) 555-1234
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-[1400px] px-5 pt-10 pb-8 md:px-10 md:pt-14">
        {/* Meta row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 font-mono text-xs font-bold uppercase">
          <div className="flex items-center gap-3">
            <span className="border-2 border-ink bg-paper px-3 py-1">EST. 2009 // LOCAL</span>
            <span className="hidden border-2 border-ink bg-paper px-3 py-1 sm:inline">24/7 EMERGENCY</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-ink" strokeWidth={2.5} />
            <span>4.98 / 500+ NEIGHBORS</span>
          </div>
        </div>

        {/* Massive headline */}
        <h1 className="font-display uppercase leading-[0.85] tracking-[-0.04em] text-[18vw] sm:text-[15vw] md:text-[13vw] lg:text-[11.5rem] xl:text-[13rem]">
          Plumb
          <br />
          <span className="inline-flex items-baseline gap-[0.15em]">
            Any<span className="italic font-serif tracking-normal not-italic">·</span>thing
          </span>
        </h1>

        {/* Sticker */}
        <div className="pointer-events-none absolute right-4 top-28 hidden md:block lg:right-16 lg:top-32">
          <div className="relative h-40 w-40 lg:h-48 lg:w-48">
            <div className="absolute inset-0 grid place-items-center rounded-full border-2 border-ink bg-brutal-yellow shadow-brutal">
              <Droplets className="h-14 w-14" strokeWidth={2.5} />
            </div>
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow">
              <defs>
                <path id="circle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
              </defs>
              <text className="fill-ink font-mono text-[13px] font-bold uppercase tracking-[0.25em]">
                <textPath href="#circle">
                  No Leak Too Small · No Job Too Weird · Since 2009 ·
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Two column */}
        <div className="mt-10 grid gap-8 border-t-2 border-ink pt-8 md:grid-cols-[1fr_auto] md:gap-14">
          <div className="max-w-xl">
            <p className="font-mono text-xs font-bold uppercase mb-4">[ 001 — What we do ]</p>
            <p className="font-serif text-2xl leading-snug md:text-3xl">
              Burst pipe at 2am. Mystery drip under the sink. A water heater that
              hums like a small engine. We show up, we diagnose, we fix it —
              flat rate, no theatrics.
            </p>
          </div>

          <a
            href="#book"
            className="group relative inline-flex items-center justify-between gap-6 self-end border-2 border-ink bg-ink px-6 py-5 text-paper shadow-brutal-lg transition-transform hover:-translate-x-1 hover:-translate-y-1 md:px-10 md:py-7"
          >
            <span className="font-display uppercase leading-none tracking-tight text-4xl md:text-6xl">
              Book&nbsp;Now
            </span>
            <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-paper transition-transform group-hover:rotate-45 md:h-20 md:w-20">
              <ArrowUpRight className="h-8 w-8 md:h-10 md:w-10" strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </section>

      {/* CARD DECK */}
      <section id="services" className="mx-auto max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
        <div className="mb-6 flex items-end justify-between border-t-2 border-ink pt-6">
          <p className="font-mono text-xs font-bold uppercase">[ 002 — Services ]</p>
          <p className="font-mono text-xs font-bold uppercase hidden sm:block">Scroll ↓</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            bg="bg-brutal-pink"
            index="01"
            title="Leak & Drip"
            desc="From a whispering faucet to a wall you can hear. We find it, seal it, and leave the wall the way we found it."
            icon={<Droplets className="h-8 w-8" strokeWidth={2.5} />}
            price="From $89"
          />
          <ServiceCard
            bg="bg-brutal-blue"
            index="02"
            title="Water Heater"
            desc="Install, swap, or resurrect. Tank, tankless, hybrid — every unit gets a same-day quote and a 5-year workmanship warranty."
            icon={<Flame className="h-8 w-8" strokeWidth={2.5} />}
            price="From $249"
          />
          <ServiceCard
            bg="bg-brutal-yellow"
            index="03"
            title="Drains & Fixtures"
            desc="Clogged shower, slow kitchen, brand new bathroom. Snaked, jetted, or rebuilt from the trap up."
            icon={<ShowerHead className="h-8 w-8" strokeWidth={2.5} />}
            price="From $129"
          />
        </div>
      </section>

      {/* FOOTER STRIP */}
      <footer className="border-t-2 border-ink bg-ink text-paper">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-5 py-6 font-mono text-xs font-bold uppercase md:flex-row md:items-center md:px-10">
          <span>© 2026 Plumb Anything LLC — Licensed & Insured #PL-448291</span>
          <span>Made in the neighborhood. Answered by a human.</span>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  bg,
  index,
  title,
  desc,
  icon,
  price,
}: {
  bg: string;
  index: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  price: string;
}) {
  return (
    <article
      className={`${bg} group flex flex-col justify-between rounded-t-3xl border-2 border-ink p-6 shadow-brutal transition-transform duration-200 hover:-translate-y-2 md:min-h-[380px] md:p-8`}
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs font-bold uppercase">// {index}</span>
        <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-paper transition-transform group-hover:rotate-12">
          {icon}
        </div>
      </div>
      <div className="mt-10">
        <h3 className="font-display uppercase leading-none tracking-tight text-4xl md:text-5xl">
          {title}
        </h3>
        <p className="mt-4 font-serif text-lg leading-snug">{desc}</p>
      </div>
      <div className="mt-6 flex items-center justify-between border-t-2 border-ink pt-4 font-mono text-xs font-bold uppercase">
        <span>{price}</span>
        <span className="inline-flex items-center gap-1">
          Book <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
      </div>
    </article>
  );
}
