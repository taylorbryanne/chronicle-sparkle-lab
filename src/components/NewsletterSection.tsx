const NewsletterSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl rounded-lg border border-border gradient-card p-12 text-center shadow-card">
          <span className="mb-4 inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary">
            Stay Informed
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
            Get the stories that <em>matter</em>
          </h2>
          <p className="mb-8 font-body text-muted-foreground">
            Join 50,000+ readers receiving our daily briefing. No spam, unsubscribe anytime.
          </p>
          <form
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-sm border border-border bg-secondary px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="rounded-sm px-6 py-3 font-body text-sm font-semibold gradient-accent text-accent-foreground transition-all hover:shadow-glow"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
