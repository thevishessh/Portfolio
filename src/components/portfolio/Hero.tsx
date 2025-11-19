import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-30" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <img 
                src={profilePhoto} 
                alt="Vishesh Srivastava" 
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Vishesh Srivastava
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Full Stack Developer & Computer Science Student
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable applications with modern technologies.
            Experienced in Java, Spring Boot, React.js, and cloud platforms.
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
