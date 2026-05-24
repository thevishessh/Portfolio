import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Brain, Zap, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Upgrade (Front-End)",
      icon: Cpu,
      description: "Interface upgrading and visual layout design",
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "JavaScript (ES6+)", "HTML5", "CSS3"],
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Brainstorm (Back-End)",
      icon: Brain,
      description: "Analytical computation and secure logic processing",
      skills: ["Java", "Spring Boot", "REST APIs", "JWT Authentication"],
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    {
      title: "Feedback (Database & Security)",
      icon: Zap,
      description: "Data storage absorption and protective isolation",
      skills: ["MySQL", "MongoDB", "H2", "SQL"],
      color: "text-lime-500",
      bg: "bg-lime-500/10",
    },
    {
      title: "Grey Matter (Tools & Core)",
      icon: Terminal,
      description: "Secret intelligence and development orchestration",
      skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Vercel", "Render", "Chrome DevTools"],
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">DNA Classifications (Skills)</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.bg}`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
