import heroImage from "@/assets/hero-news.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[90vh] items-end overflow-hidden pt-20">
      <img
        src={heroImage}
        alt="City skyline at night"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="gradient-hero absolute inset-0" />

      <div className="container relative z-10 mx-auto px-6 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <span className="mb-4 inline-block rounded-sm bg-primary px-3 py-1 font-body text-xs font-bold uppercase tracking-widest text-primary-foreground">
            Breaking News
          </span>
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            The Future of Cities: <em className="text-primary">Reimagining</em> Urban Life
          </h1>
          <p className="mb-8 max-w-xl font-body text-lg leading-relaxed text-secondary-foreground">
            As global populations shift and technology reshapes our world, cities are undergoing their most dramatic transformation in a century.
          </p>
          <a
            href="#read-more"
            className="inline-flex items-center gap-2 rounded-sm px-8 py-3 font-body text-sm font-semibold gradient-accent text-accent-foreground transition-all hover:shadow-glow"
          >
            Read Full Story
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
