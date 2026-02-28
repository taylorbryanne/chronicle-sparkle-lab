import { TrendingUp } from "lucide-react";

const trending = [
  { rank: "01", title: "Global Summit Reaches Historic Climate Agreement", category: "Politics", reads: "24K reads" },
  { rank: "02", title: "Breakthrough in Quantum Computing Stuns Scientists", category: "Science", reads: "19K reads" },
  { rank: "03", title: "The Rise of Digital Nomad Cities Across Southeast Asia", category: "Culture", reads: "15K reads" },
  { rank: "04", title: "Central Banks Signal Major Policy Shift for 2026", category: "Business", reads: "12K reads" },
  { rank: "05", title: "New Study Reveals the True Cost of Social Media on Youth", category: "Opinion", reads: "11K reads" },
];

const TrendingSection = () => {
  return (
    <section className="border-y border-border py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Trending Now
          </h2>
        </div>

        <div className="grid gap-0 divide-y divide-border md:grid-cols-1">
          {trending.map((item) => (
            <a
              key={item.rank}
              href="#"
              className="group flex items-center gap-6 py-6 transition-colors hover:bg-secondary/30 md:gap-8 md:px-4"
            >
              <span className="font-display text-3xl font-bold text-primary/40 transition-colors group-hover:text-primary md:text-4xl">
                {item.rank}
              </span>
              <div className="flex-1">
                <h3 className="mb-1 font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary md:text-xl">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 font-body text-xs text-muted-foreground">
                  <span className="font-semibold uppercase tracking-wider text-primary/70">{item.category}</span>
                  <span>·</span>
                  <span>{item.reads}</span>
                </div>
              </div>
              <span className="hidden font-body text-sm text-muted-foreground transition-colors group-hover:text-primary md:block" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
