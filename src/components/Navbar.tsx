import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = ["World", "Politics", "Business", "Technology", "Culture", "Science", "Opinion"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
          The<span className="text-primary">Signal</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <a
            href="#subscribe"
            className="hidden rounded-sm px-5 py-2 font-body text-sm font-semibold gradient-accent text-accent-foreground transition-all hover:shadow-glow sm:inline-block"
          >
            Subscribe
          </a>
          <button
            className="text-muted-foreground md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 font-body text-lg text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
