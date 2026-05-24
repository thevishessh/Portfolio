import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
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

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-30" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Profile Photo - Omnitrix Bezel Style */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              {/* Outer pulsing glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Spinning Omnitrix outer bezel markings */}
              <div className="absolute -inset-1 rounded-full border-4 border-dashed border-primary animate-omnitrix-spin opacity-80" />
              
              {/* Inner tech ring */}
              <div className="absolute -inset-3 rounded-full border border-primary/30 scale-95 group-hover:scale-100 transition-transform duration-500" />
              
              <img 
                src={profilePhoto} 
                alt="Vishesh Srivastava" 
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-2xl z-10"
              />
              
              {/* Mini Omnitrix core badge at bottom right */}
              <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-background border-2 border-primary z-20 flex items-center justify-center shadow-lg group-hover:rotate-180 transition-transform duration-500">
                <div className="w-3.5 h-3.5 rounded-full bg-primary animate-pulse" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Vishesh Srivastava
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer & Computer Science Student
            </p>
            
            {/* Tech HUD readouts */}
            <div className="flex flex-wrap gap-3 justify-center text-xs font-mono text-primary/80 pt-2">
              <span className="px-2.5 py-1 rounded bg-primary/10 border border-primary/30 shadow-sm animate-pulse">
                [ STATUS: ACTIVE ]
              </span>
              <span className="px-2.5 py-1 rounded bg-primary/10 border border-primary/30 shadow-sm">
                [ DEVICE: OMNITRIX_v10 ]
              </span>
              <span className="px-2.5 py-1 rounded bg-primary/10 border border-primary/30 shadow-sm">
                [ SEC: DNA_CALIBRATED ]
              </span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Final-year B.Tech CSE student at AKTU, graduating June 2026, aiming for a Full-Stack Developer role. Skilled in Java, Spring Boot, and React.js with hands-on experience building real-world projects.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gap-2 shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/vishesh-srivastava-b989312a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/thevishessh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:srivastavavishesh1505@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
