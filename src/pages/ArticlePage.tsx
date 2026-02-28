import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import articleHero from "@/assets/article-hero-city.jpg";
import articleMidStreet from "@/assets/article-mid-street.jpg";
import articleMidGreen from "@/assets/article-mid-green.jpg";
import article1 from "@/assets/article-1.jpg";

const ArticlePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-background">
      {/* Floating nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to TheSignal
          </Link>
          <button className="flex items-center gap-2 rounded-sm border border-border px-4 py-2 font-body text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label="Share">
            <Share2 className="h-3.5 w-3.5" />
            Share
          </button>
        </div>
      </nav>

      {/* ===== HERO: Full-bleed title over image ===== */}
      <header className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={articleHero}
          alt="Futuristic city with green rooftops and glowing bridges"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="gradient-hero absolute inset-x-0 bottom-0 h-1/3" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="mb-6 inline-block rounded-sm bg-primary px-3 py-1 font-body text-xs font-bold uppercase tracking-widest text-primary-foreground">
            Feature
          </span>
          <h1 className="mb-8 font-display text-5xl font-bold leading-[1.1] text-foreground md:text-7xl lg:text-8xl text-balance">
            The Future of Cities: <em className="text-primary">Reimagining</em> Urban Life
          </h1>
          <p className="mx-auto mb-10 max-w-2xl font-body text-lg leading-relaxed text-secondary-foreground md:text-xl">
            As global populations shift and technology reshapes our world, cities are undergoing their most dramatic transformation in a century.
          </p>

          {/* Author block */}
          <div className="flex items-center justify-center gap-4">
            <img src={article1} alt="James Crawford" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/50" />
            <div className="text-left">
              <p className="font-body text-sm font-semibold text-foreground">James Crawford</p>
              <div className="flex items-center gap-3 font-body text-xs text-muted-foreground">
                <span>February 28, 2026</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 12 min read</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== INTRO TEXT SECTION ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-display text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
            For the first time in history, more than half of humanity lives in cities. By 2050, that number is expected to reach 68%. The question isn't <em>whether</em> we'll urbanize — it's how we'll do it without breaking the planet.
          </p>
        </div>
      </section>

      {/* ===== FULL-BLEED IMAGE BREAK ===== */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={articleMidStreet}
          alt="Vibrant night market with neon reflections on wet pavement"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="mx-auto max-w-2xl px-6 text-center font-display text-3xl font-bold leading-snug text-foreground md:text-5xl text-balance">
            The streets are where culture lives and breathes
          </p>
        </div>
      </section>

      {/* ===== BODY TEXT SECTION 1 ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 font-display text-3xl font-bold text-foreground md:text-4xl">
            The Urban Migration
          </h2>
          <div className="space-y-6 font-body text-lg leading-[1.8] text-secondary-foreground">
            <p>
              The 21st century belongs to cities. Across the globe, rural populations are migrating toward urban centers at an unprecedented rate. In sub-Saharan Africa, cities are absorbing nearly 20 million new residents every year. In Southeast Asia, megacities are emerging from what were once quiet provincial towns.
            </p>
            <p>
              This shift isn't just about numbers — it's about identity. Cities are becoming the primary stage on which human culture, innovation, and conflict play out. The decisions made by urban planners, architects, and policymakers today will determine the quality of life for billions.
            </p>
            <p>
              Yet the old models of urban development — car-centric sprawl, rigid zoning, and top-down master planning — are proving inadequate. A new generation of urbanists is experimenting with radically different approaches, from 15-minute cities to vertical forests.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PULL QUOTE ===== */}
      <section className="border-y border-border py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote className="font-display text-3xl font-bold italic leading-snug text-primary md:text-5xl text-balance">
            "We don't just build cities — we build the conditions for human flourishing or human suffering."
          </blockquote>
          <p className="mt-6 font-body text-sm uppercase tracking-widest text-muted-foreground">
            — Dr. Amara Osei, Urban Systems Lab
          </p>
        </div>
      </section>

      {/* ===== BODY TEXT SECTION 2 ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 font-display text-3xl font-bold text-foreground md:text-4xl">
            Technology as Infrastructure
          </h2>
          <div className="space-y-6 font-body text-lg leading-[1.8] text-secondary-foreground">
            <p>
              Smart city technology has moved beyond buzzword status into tangible reality. Sensors embedded in roads, buildings, and utilities are generating rivers of data that allow city managers to respond to problems in real time — from traffic jams to air quality alerts.
            </p>
            <p>
              But the real revolution isn't in the hardware. It's in the platforms that allow citizens to participate in how their city is governed. Digital town halls, participatory budgeting apps, and open data portals are shifting power from city hall to the neighbourhood level.
            </p>
          </div>

          {/* Inline stat cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { stat: "4.4B", label: "People in cities by 2030" },
              { stat: "70%", label: "Of global CO₂ from urban areas" },
              { stat: "$80T", label: "Needed in infrastructure investment" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-border gradient-card p-8 text-center shadow-card">
                <p className="font-display text-4xl font-bold text-primary">{item.stat}</p>
                <p className="mt-2 font-body text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FULL-BLEED IMAGE WITH TEXT OVERLAY ===== */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={articleMidGreen}
          alt="Sustainable architecture with vertical gardens and solar panels"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl text-balance">
              Building Green, Thinking Big
            </h2>
            <p className="max-w-xl font-body text-lg leading-relaxed text-secondary-foreground">
              Sustainable architecture isn't a luxury anymore — it's survival. The next generation of buildings will generate their own energy, purify their own water, and grow their own food.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FINAL TEXT SECTION ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 font-display text-3xl font-bold text-foreground md:text-4xl">
            What Comes Next
          </h2>
          <div className="space-y-6 font-body text-lg leading-[1.8] text-secondary-foreground">
            <p>
              The cities of 2050 won't look like the cities of today — and that's a good thing. The concrete jungles of the 20th century were built for cars. The cities of the future will be built for people.
            </p>
            <p>
              Imagine walking through a neighbourhood where every rooftop is a garden, where autonomous shuttles replace private cars, where air quality sensors in your phone guide you along the cleanest route. Where buildings are constructed from carbon-capturing materials and powered by the sun.
            </p>
            <p>
              This isn't science fiction. It's already happening in pockets — in Copenhagen, in Singapore, in Medellín. The challenge now is scaling these experiments to meet the demands of a planet that's running out of time.
            </p>
            <p>
              The future of cities is the future of humanity. And it's being written right now.
            </p>
          </div>
        </div>
      </section>

      {/* ===== END CARD ===== */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src={article1} alt="James Crawford" className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/50" />
            <div className="text-left">
              <p className="font-body text-base font-semibold text-foreground">James Crawford</p>
              <p className="font-body text-sm text-muted-foreground">Senior Correspondent, Urban Affairs</p>
            </div>
          </div>
          <div className="mb-8 h-px w-16 mx-auto bg-primary/40" />
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-sm px-8 py-3 font-body text-sm font-semibold gradient-accent text-accent-foreground transition-all hover:shadow-glow"
          >
            ← Back to all stories
          </Link>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
