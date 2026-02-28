import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";

const articles = [
  {
    image: article1,
    category: "Media",
    title: "Inside the Newsrooms Shaping Tomorrow's Headlines",
    excerpt: "How independent journalism is thriving in the digital age with new business models and audience engagement strategies.",
    author: "James Crawford",
    date: "Feb 28, 2026",
  },
  {
    image: article2,
    category: "Technology",
    title: "AI Takes Center Stage at the World Innovation Summit",
    excerpt: "The latest breakthroughs revealed at this year's most anticipated technology event signal a paradigm shift.",
    author: "Sarah Lin",
    date: "Feb 27, 2026",
  },
  {
    image: article3,
    category: "Environment",
    title: "The Silent Crisis: Mountain Ecosystems Under Threat",
    excerpt: "Climate change is reshaping the world's highest peaks, with consequences that ripple across entire continents.",
    author: "David Okonkwo",
    date: "Feb 26, 2026",
  },
  {
    image: article4,
    category: "Business",
    title: "Markets Brace for a New Era of Volatility",
    excerpt: "Global financial systems face unprecedented challenges as geopolitical tensions and tech disruption converge.",
    author: "Elena Vasquez",
    date: "Feb 25, 2026",
  },
];

const FeaturedArticles = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="mb-2 block font-body text-sm font-semibold uppercase tracking-widest text-primary">
              Featured
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
              Editor's Picks
            </h2>
          </div>
          <a href="#all" className="hidden font-body text-sm font-medium text-muted-foreground transition-colors hover:text-primary sm:block">
            View all stories →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Large featured card */}
          <article className="group relative overflow-hidden rounded-lg shadow-card" style={{ animationDelay: "0.1s" }}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="mb-3 inline-block rounded-sm bg-primary px-2 py-1 font-body text-xs font-bold uppercase tracking-wider text-primary-foreground">
                {articles[0].category}
              </span>
              <h3 className="mb-3 font-display text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                {articles[0].title}
              </h3>
              <p className="mb-4 font-body text-sm leading-relaxed text-secondary-foreground line-clamp-2">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center gap-3 font-body text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{articles[0].author}</span>
                <span>·</span>
                <span>{articles[0].date}</span>
              </div>
            </div>
          </article>

          {/* Stacked smaller cards */}
          <div className="flex flex-col gap-8">
            {articles.slice(1).map((article, i) => (
              <article
                key={article.title}
                className="group flex gap-5 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-glow"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="mb-1 font-body text-xs font-semibold uppercase tracking-wider text-primary">
                    {article.category}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 font-body text-xs text-muted-foreground">
                    <span>{article.author}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
