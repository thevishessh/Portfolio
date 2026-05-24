import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";

const navItems = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Active Section Tracking using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.href);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Vishesh.
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground pb-1"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full w-9 h-9"
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500 transition-all rotate-0 scale-100" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] text-primary transition-all rotate-0 scale-100" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Navigation Drawer */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full w-9 h-9"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsMenuOpen(false);
                    }}
                    className={`text-lg font-semibold transition-colors hover:text-primary text-left px-2 py-1.5 rounded-md hover:bg-secondary ${
                      activeSection === item.href
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
