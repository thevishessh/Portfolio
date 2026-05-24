import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Expert in Java, Spring Boot, React.js, and building scalable REST APIs",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Strong grasp of DSA, system design, and clean code principles",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Experienced in Agile environments with collaborative mindset",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Final-year B.Tech CSE student at Dr. A.P.J. Abdul Kalam Technical University (AKTU), graduating in June 2026. Skilled in full-stack development with a focus on Java, Spring Boot, React.js, SQL, and NoSQL databases. Experienced in building scalable applications, designing secure REST APIs, and delivering clean, maintainable code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Equipped with a solid foundation in Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), database management, and agile methodologies. Active collaborator with hands-on experience working in engineering teams, performing code reviews, debugging, and improving product performance.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
