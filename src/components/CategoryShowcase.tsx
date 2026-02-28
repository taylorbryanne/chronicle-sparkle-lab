import catFashion from "@/assets/cat-fashion.jpg";
import catNews from "@/assets/cat-news.jpg";
import catScience from "@/assets/cat-science.jpg";
import catCulture from "@/assets/cat-culture.jpg";
import catBusiness from "@/assets/cat-business.jpg";
import catEnvironment from "@/assets/cat-environment.jpg";

const categories = [
  { image: catFashion, title: "The Future of Sustainable Fashion", label: "Style & Fashion" },
  { image: catNews, title: "An Era of Shifting Alliances", label: "News & Media" },
  { image: catScience, title: "Breakthroughs Rewriting the Rules", label: "Science & Research" },
  { image: catCulture, title: "Cities That Never Sleep", label: "Culture & Society" },
  { image: catBusiness, title: "Markets on the Edge", label: "Business & Finance" },
  { image: catEnvironment, title: "The Fight for Our Forests", label: "Environment" },
];

const CategoryShowcase = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-2 block font-body text-sm font-semibold uppercase tracking-widest text-primary">
            Explore
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Stories by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href="#"
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:shadow-glow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                    {cat.title}
                  </h3>
                </div>
              </div>
              <div className="px-6 py-4 text-center">
                <span className="font-body text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  {cat.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
