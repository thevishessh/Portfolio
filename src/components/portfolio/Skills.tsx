import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Layout, Sparkles, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Spring Boot", "REST APIs", "JWT Authentication"],
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Frontend Development",
      icon: Layout,
      skills: ["React.js", "Tailwind CSS", "Bootstrap"],
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "MongoDB", "H2"],
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "AI / LLM Tools",
      icon: Sparkles,
      skills: ["Google Gemini API", "GitHub Copilot", "Prompt Engineering"],
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: "Developer Tools",
      icon: Terminal,
      skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Vercel", "Render", "Chrome DevTools"],
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${category.bg}`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
