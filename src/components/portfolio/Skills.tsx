import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "React.js", "REST APIs"],
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["Oracle Cloud Foundation", "AWS (Basic)"],
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Co-Pilot", "Bolt"],
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      title: "Core CS Concepts",
      icon: Brain,
      skills: ["OOP", "DSA", "System Design", "SDLC", "Agile", "Code Reviews", "Clean Code"],
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Curiosity", "Learning Agility", "Adaptability", "Analytical Thinking", "Collaboration"],
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
