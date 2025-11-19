import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <Card className="p-8 hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-primary/10 h-fit">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Frontend Developer</h3>
                <p className="text-lg text-primary font-semibold">Booqin</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
              <div className="flex items-center gap-2 md:justify-end">
                <Calendar className="w-4 h-4" />
                <span>Sep 2025 - Oct 2025</span>
              </div>
              <div className="flex items-center gap-2 md:justify-end">
                <MapPin className="w-4 h-4" />
                <span>Mysore</span>
              </div>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span className="text-muted-foreground">
                Built and optimized <strong className="text-foreground">20+ responsive UI components</strong> using 
                HTML, CSS, JavaScript, Bootstrap, and Tailwind, improving page usability and load consistency 
                across devices.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span className="text-muted-foreground">
                Collaborated with a <strong className="text-foreground">4-member engineering team</strong> in 
                Agile sprints, contributing to feature planning, peer code reviews, and sprint demos.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span className="text-muted-foreground">
                Improved page responsiveness and performance by <strong className="text-foreground">15–20%</strong>, 
                ensuring consistency across desktop and mobile platforms.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span className="text-muted-foreground">
                Participated in debugging sessions, unit testing, and code reviews to ensure clean, 
                maintainable, and high-quality code.
              </span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">HTML/CSS</Badge>
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">Bootstrap</Badge>
            <Badge variant="secondary">Tailwind</Badge>
            <Badge variant="secondary">Agile</Badge>
            <Badge variant="secondary">Code Reviews</Badge>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
