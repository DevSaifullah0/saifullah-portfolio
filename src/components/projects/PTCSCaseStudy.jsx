import Image from "next/image";
import Link from "next/link";

import {
  ptcsAdminFeatures,
  ptcsAdminScreens,
  ptcsEngineeringHighlights,
  ptcsPassengerFeatures,
  ptcsScreens,
} from "../../data/ptcs";

const technologies = [
  "React Native",
  "TypeScript",
  "React Navigation",
  "Django REST Framework",
  "PostgreSQL",
  "SQLite",
  "Firebase Cloud Messaging",
];

export default function PTCSCaseStudy() {
  return (
    <main className="overflow-hidden bg-[#f7f8f3] text-[#173b2d] selection:bg-[#c9e8d3] selection:text-[#173b2d]">
      <section className="relative isolate border-b border-[#dce5dc]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 -top-52 h-[34rem] w-[34rem] rounded-full bg-[#e2eee2] blur-3xl" />
          <div className="absolute -bottom-64 left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#edf2e5] blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-10">
          <div className="relative z-10">
            <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-[#537061] transition hover:bg-white/70 hover:text-[#173b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#347c52]">
              <span aria-hidden="true">←</span> All projects
            </Link>

            <div className="mt-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#4d765d]">
              <span className="h-px w-8 bg-[#78a883]" /> Project study · Karachi
            </div>

            <h1 className="mt-6 text-6xl font-semibold tracking-[-0.075em] text-[#173b2d] sm:text-7xl md:text-8xl">PTCS<span className="text-[#80aa83]">.</span></h1>
            <p className="mt-5 max-w-xl text-2xl font-medium leading-snug tracking-[-0.035em] text-[#315846] sm:text-3xl">
              A bilingual route companion for Karachi’s electric bus network.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#64766a] sm:text-lg">
              Helping passengers explore published routes, understand stops, plan journeys, and keep useful route information close at hand.
            </p>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Platforms and technologies">
              {["iOS", "Android", "React Native", "English · اردو"].map((item) => (
                <span key={item} className="rounded-full border border-[#d4e0d3] bg-white/75 px-4 py-2 text-sm font-medium text-[#456650] shadow-[0_2px_8px_rgba(26,65,46,0.04)]">{item}</span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#617367]">
              <span><span className="font-semibold text-[#274b37]">Role</span> · React Native Developer</span>
              <span><span className="font-semibold text-[#274b37]">Status</span> · Case study</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[20rem] py-4 lg:py-8">
            <div className="absolute inset-x-8 bottom-0 top-8 -z-10 rotate-[-5deg] rounded-[2.5rem] bg-[#dcebdc]" />
            <div className="rounded-[3rem] border-[7px] border-[#214530] bg-[#214530] p-1.5 shadow-[0_28px_80px_rgba(30,72,49,0.18)]">
              <div className="relative aspect-[9/18.4] overflow-hidden rounded-[2.35rem] bg-white">
                <Image
                  src="/projects/ptcs/screenshots/11-home.jpeg"
                  alt="PTCS home screen with route search, published Karachi coverage, and trip planning"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 320px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-[#7b8c7e]">PTCS passenger home · app screenshot</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:py-24 lg:px-10">
        <SectionLabel eyebrow="01 / The project" title="Overview" />
        <div className="max-w-3xl">
          <p className="text-2xl font-medium leading-relaxed tracking-[-0.03em] text-[#244a35] sm:text-3xl">Karachi’s electric bus routes need clear, dependable information that passengers can use before they board.</p>
          <div className="mt-7 grid gap-5 text-base leading-8 text-[#64766a] sm:grid-cols-2">
            <p>PTCS brings published route and stop details into one bilingual passenger app. Riders can explore the network, inspect route information, plan journeys, save routes for offline use, and set arrival alerts for a chosen route and boarding point.</p>
            <p>Transit records are sourced and reviewed before publication. PTCS presents verified route information and arrival events; it does not show live vehicle locations or predict bus arrival times.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dce5dc] bg-[#edf3ea]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
          <SectionLabel eyebrow="02 / Passenger experience" title="Built around the journey" description="Practical tools for checking a route, getting oriented, and returning to useful information." />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ptcsPassengerFeatures.map((feature, index) => (
              <article key={feature.title} className="rounded-[1.4rem] border border-[#dbe6d9] bg-[#fbfcf8] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,77,50,0.07)] motion-reduce:transform-none motion-reduce:transition-none">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f2e5] text-lg font-semibold text-[#3b7950]" aria-hidden="true">{feature.icon}</span>
                  <span className="text-xs font-medium tabular-nums text-[#9aaa9a]">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-[#274c37]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#728174]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ScreenshotSection title="Passenger app" eyebrow="03 / Screenshots" items={ptcsScreens} />

      <section className="border-y border-[#dce5dc] bg-[#173b2d] text-[#f5f8f1]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
          <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a8c7a8]">04 / Staff-only tools</p>
              <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">Operations stay inside a protected admin area.</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#c0d0c2]">Staff can manage passenger access and maintain transit records. These controls are not part of the public passenger experience.</p>
              <span className="mt-6 inline-flex rounded-full border border-[#537560] px-4 py-2 text-xs font-medium text-[#c5d7c3]">Staff access required</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ptcsAdminFeatures.map((feature, index) => (
                <article key={feature.title} className="rounded-2xl border border-[#43624d] bg-[#204735] p-5">
                  <p className="text-xs font-medium text-[#9fbea1]">OPERATIONS · 0{index + 1}</p>
                  <h3 className="mt-4 font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#c1d0c1]">{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ScreenshotSection title="Admin & operations" eyebrow="05 / Staff workspace" items={ptcsAdminScreens} staffOnly />

      <section className="border-y border-[#dce5dc] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
          <SectionLabel eyebrow="06 / System map" title="A clear path from route records to riders" description="Passenger requests and transit records move through a small, understandable set of services." />

          <figure className="mt-10 rounded-[1.7rem] border border-[#dbe5d9] bg-[#f8faf6] p-5 sm:p-8" aria-label="PTCS technical architecture">
            <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
              <ArchitectureNode eyebrow="PASSENGER APP" title="React Native" detail="TypeScript · React Navigation" />
              <Connector label="HTTPS API" />
              <ArchitectureNode eyebrow="BACKEND" title="Django REST API" detail="Secure bearer-token sessions" />
              <Connector label="Data access" />
              <ArchitectureNode eyebrow="PRIMARY DATA" title="PostgreSQL" detail="Passenger and transit records" />
            </div>

            <div className="my-5 grid gap-3 md:grid-cols-2">
              <ArchitectureNode eyebrow="ON-DEVICE" title="SQLite cache" detail="Saved routes and offline access" />
              <ArchitectureNode eyebrow="PUSH DELIVERY" title="Firebase Cloud Messaging" detail="Arrival alert notifications" />
            </div>

            <div className="rounded-2xl border border-[#d9e5d7] bg-[#edf4e9] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#638069]">Route-data governance</p>
              <div className="mt-4 grid gap-3 text-center sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
                {["Sourced route records", "Editor", "Reviewer", "Publisher", "Passenger release"].map((step, index) => (
                  <div key={step} className="contents">
                    <span className="rounded-xl border border-[#d2e0d0] bg-white px-3 py-3 text-sm font-medium text-[#355943]">{step}</span>
                    {index < 4 && <span aria-hidden="true" className="text-[#78a883]">→</span>}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs leading-5 text-[#728174]">Published route datasets are reviewed before they reach passengers.</p>
            </div>
            <figcaption className="mt-4 text-sm text-[#718174]">Architecture overview · notifications are sent for verified arrival events; no live vehicle location service is presented.</figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <SectionLabel eyebrow="07 / Engineering" title="Decisions behind the experience" description="The product’s core is trustworthy route information, useful offline access, and clear boundaries between passenger and staff tasks." />
        <div className="mt-10 grid gap-x-10 md:grid-cols-2">
          {ptcsEngineeringHighlights.map((item) => (
            <article key={item.number} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-[#dce5dc] py-6">
              <span className="pt-1 text-xs font-semibold tabular-nums text-[#84a287]">{item.number}</span>
              <div>
                <h3 className="font-semibold text-[#294e39]">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-[#6d7d70]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="Technology stack">
          {technologies.map((tech) => <span key={tech} className="rounded-full border border-[#d5e1d4] bg-white px-4 py-2 text-sm text-[#52705a]">{tech}</span>)}
        </div>
      </section>

      <section className="border-t border-[#dce5dc] bg-[#eaf1e7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-center md:py-20 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#69826c]">08 / Next step</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-[#1f4732] sm:text-4xl">Want to talk about PTCS?</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-[#637568]">The source repository and live demo links have not been added yet. Contact me to discuss the project.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#28623e] px-6 text-sm font-semibold text-white transition hover:bg-[#1f5033] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28623e] motion-reduce:transition-none">Contact me <span aria-hidden="true" className="ml-2">↗</span></Link>
            <span className="rounded-full border border-[#cbdac9] bg-white/60 px-4 py-3 text-xs text-[#718174]">GitHub · not supplied</span>
            <span className="rounded-full border border-[#cbdac9] bg-white/60 px-4 py-3 text-xs text-[#718174]">Demo · not supplied</span>
            <span className="rounded-full border border-[#cbdac9] bg-white/60 px-4 py-3 text-xs text-[#718174]">Email · not supplied</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b866e]">{eyebrow}</p>
      <h2 className="mt-3 max-w-sm text-2xl font-semibold tracking-[-0.04em] text-[#244a35] sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 max-w-sm text-sm leading-7 text-[#718174]">{description}</p>}
    </div>
  );
}

function ScreenshotSection({ title, eyebrow, items, staffOnly = false }) {
  const groups = [...new Set(items.map((item) => item.group).filter(Boolean))];

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionLabel eyebrow={eyebrow} title={title} description={staffOnly ? "These controls are available to staff inside the protected workspace. No admin screenshots were included in this batch." : "Passenger screens are arranged in app-flow order, from first launch through routes, alerts, and settings."} />
        {staffOnly && <span className="w-fit rounded-full border border-[#d7e3d5] bg-[#edf4e9] px-4 py-2 text-xs font-medium text-[#52705a]">Staff only</span>}
      </div>

      {items.length > 0 && items.some((item) => item.src) ? (
        <div className="mt-10 space-y-12">
          {groups.map((group) => (
            <div key={group}>
              <h3 className="mb-5 border-b border-[#dce5dc] pb-3 text-sm font-semibold text-[#55745b]">{group}</h3>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.filter((item) => item.group === group && item.src).map((item) => (
                  <a key={item.name} href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size screenshot: ${item.name}`} className="group rounded-2xl border border-[#dbe5d9] bg-white p-3 transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#347c52] motion-reduce:transform-none motion-reduce:transition-none">
                    <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-[#edf3ea]">
                      <Image src={item.src} alt={item.alt || `${item.name} screen from the PTCS app`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain transition-transform duration-300 group-hover:scale-[1.01] motion-reduce:transition-none" />
                      <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-[#355943] shadow">Open full size ↗</span>
                    </div>
                    <h4 className="px-2 pb-1 pt-4 font-semibold text-[#294e39]">{item.name}</h4>
                    {item.caption && <p className="px-2 pb-2 text-sm leading-6 text-[#718174]">{item.caption}</p>}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[1.5rem] border border-dashed border-[#c8d8c8] bg-white/70 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e8f1e5] text-xl text-[#4e7957]">▧</span>
            <div>
              <h3 className="font-semibold text-[#315541]">Admin screenshots not supplied yet</h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-[#718174]">The staff-only tools are described here, but no admin screen captures were included with the passenger app images.</p>
            </div>
          </div>
          <ul className="mt-6 grid gap-x-8 gap-y-4 border-t border-[#e2eae0] pt-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.name} className="min-w-0">
                <p className="text-sm font-semibold text-[#3b6046]">{item.name}</p>
                <p className="mt-1 text-xs leading-5 text-[#7a897c]">{item.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function ArchitectureNode({ eyebrow, title, detail }) {
  return (
    <div className="rounded-2xl border border-[#dbe5d9] bg-white p-4 text-center">
      <p className="text-[10px] font-semibold tracking-[0.13em] text-[#849686]">{eyebrow}</p>
      <p className="mt-2 text-sm font-semibold text-[#2c503b]">{title}</p>
      <p className="mt-1 text-xs leading-5 text-[#78877a]">{detail}</p>
    </div>
  );
}

function Connector({ label }) {
  return (
    <div className="flex items-center justify-center gap-2 py-1 text-[#77927a] md:flex-col md:py-0" aria-label={label}>
      <span className="h-px w-8 bg-[#b8cbb7] md:h-8 md:w-px" />
      <span className="text-[10px] font-medium">{label} →</span>
      <span className="h-px w-8 bg-[#b8cbb7] md:hidden" />
    </div>
  );
}
