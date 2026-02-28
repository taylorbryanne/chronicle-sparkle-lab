const footerLinks = {
  Sections: ["World", "Politics", "Business", "Technology", "Culture", "Science"],
  Company: ["About", "Careers", "Press", "Ethics"],
  Support: ["Contact", "FAQ", "Advertise", "Privacy"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="/" className="font-display text-2xl font-bold text-foreground">
              The<span className="text-primary">Signal</span>
            </a>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              Award-winning journalism that illuminates our world. Independent, fearless, and always in pursuit of truth.
            </p>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-foreground">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-border pt-8">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 TheSignal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
