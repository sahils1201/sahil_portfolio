import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoFrame } from "@/components/PhotoFrame";
import { MountainGlyph } from "@/components/MountainMarks";
import { expeditionTimeline, mountainLessons } from "@/lib/site-data";
import kedarkantha from "@/assets/kedarkantha.jpg";
import spitiRoad from "@/assets/spiti-road.jpg";
import ladakhRoad from "@/assets/ladakh-road.jpg";

const ladakhLessons = [
  { t: "Preparation matters.", n: "At high altitude and remote terrain, preparation stops being optional." },
  { t: "Adapt to the conditions.", n: "You cannot control the terrain, weather or road. You can control how you respond." },
  { t: "Respect the environment.", n: "The mountains demand patience and humility." },
  { t: "Keep going.", n: "Some stretches are uncomfortable long before they become difficult." },
];

const spitiLessons = [
  { t: "Self-reliance.", n: "When you're riding alone, every decision belongs to you." },
  { t: "Adaptability.", n: "Plans change quickly when the road becomes the environment." },
  { t: "Patience.", n: "Some journeys cannot be rushed." },
  { t: "Confidence.", n: "The biggest part of an expedition is often convincing yourself that you can handle the next section." },
];

export function OutsideScreen() {
  return (
    <section id="beyond" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHeading
            index="08"
            title="Outside the Screen"
            subtitle="Some of the best things I've learned had nothing to do with a keyboard."
          />
        </Reveal>

        {/* Kedarkantha */}
        <Reveal className="mt-16">
          <article className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <PhotoFrame
                src={kedarkantha}
                alt="Atmospheric black and white illustration of a snow-covered Himalayan slope in fog"
                width={1408}
                height={1008}
                className="aspect-[7/5]"
              />
            </div>
            <div className="md:col-span-5">
              <p className="meta-label">Mountain Expedition · ~4,000m</p>
              <h3 className="display mt-4 text-[clamp(2rem,4.4vw,3rem)]">Kedarkantha Summit</h3>
              <p className="mt-6 max-w-[46ch] leading-relaxed text-muted-foreground">
                One of the experiences that pushed me beyond familiar ground — climbing to roughly
                4,000 metres and learning that progress is often less about speed and more about
                continuing when the path gets difficult.
              </p>
              <div className="mt-8 border-t border-border pt-6">
                <p className="meta-label">What it taught me</p>
                <p className="mt-3 text-lg tracking-tight">Keep moving.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Not every climb needs to feel easy to be worth taking.
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Spiti */}
        <Reveal className="mt-24">
          <article className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <p className="meta-label">Solo Motorcycle Expedition</p>
              <h3 className="display mt-4 text-[clamp(2rem,4.4vw,3rem)]">Spiti Bike Expedition</h3>
              <p className="display mt-6 text-[clamp(3rem,9vw,6rem)] leading-none">SOLO</p>
              <p className="mt-6 max-w-[46ch] leading-relaxed text-muted-foreground">
                A completely solo motorcycle expedition through Spiti Valley — navigating remote
                terrain, changing conditions and the responsibility of managing the journey
                independently.
              </p>
            </div>
            <div className="md:col-span-7">
              <PhotoFrame
                src={spitiRoad}
                alt="Black and white illustration of a lone motorcycle parked on a remote high-altitude mountain road"
                width={1408}
                height={1008}
                className="aspect-[7/5]"
              />
            </div>
          </article>
          <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {spitiLessons.map((l) => (
              <li key={l.t} className="border-t border-border pt-4">
                <p className="text-base tracking-tight">{l.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.n}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Ladakh */}
        <Reveal className="mt-24">
          <article>
            <PhotoFrame
              src={ladakhRoad}
              alt="Black and white illustration of an empty high-altitude Himalayan road disappearing into barren mountains"
              width={1600}
              height={912}
              className="aspect-[16/9] md:aspect-[21/9]"
            />
            <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <p className="meta-label">Motorcycle Expedition · Umling La</p>
                <h3 className="display mt-4 text-[clamp(2rem,4.4vw,3rem)]">
                  Ladakh Bike Expedition
                </h3>
                <p className="display mt-8 text-[clamp(3.5rem,9vw,7rem)] leading-none tabular-nums">
                  5,800m
                </p>
                <p className="mt-3 meta-label">19,024 ft · Umling La</p>
              </div>
              <div className="md:col-span-7">
                <p className="max-w-[50ch] text-lg leading-relaxed text-muted-foreground">
                  A recent motorcycle expedition through Ladakh that took me to Umling La at
                  approximately 5,800 metres / 19,024 feet above sea level.
                </p>
                <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                  {ladakhLessons.map((l) => (
                    <li key={l.t} className="border-t border-border pt-4">
                      <p className="text-base tracking-tight">{l.t}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.n}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Expedition timeline */}
        <Reveal className="mt-24">
          <p className="meta-label">Expedition line</p>
          <ol className="mt-6 border-t border-border">
            {expeditionTimeline.map((e, i) => (
              <li
                key={e.name}
                className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-6"
              >
                <div className="flex items-baseline gap-5">
                  <span className="meta-label tabular-nums">0{i + 1}</span>
                  <span className="display text-[clamp(1.5rem,4vw,2.5rem)] uppercase">
                    {e.name}
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="hidden h-px w-24 bg-border sm:block lg:w-56" />
                  <span className="meta-label">{e.note}</span>
                  <MountainGlyph className="text-border" />
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted-foreground">
            Build things. Climb things. Keep moving.
          </p>
        </Reveal>

        {/* Lessons */}
        <Reveal className="mt-24">
          <h3 className="display text-[clamp(1.75rem,3.4vw,2.75rem)]">
            Things the mountains taught me.
          </h3>
          <ul className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {mountainLessons.map((l) => (
              <li key={l.title} className="border-t border-border pt-5">
                <p className="text-lg tracking-tight">{l.title}</p>
                <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-muted-foreground">
                  {l.note}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
