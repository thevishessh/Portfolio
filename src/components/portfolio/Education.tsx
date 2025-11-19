import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Trophy } from "lucide-react";

const Education = () => {
  const achievements = [
    "GitHub Copilot Fundamentals Certification",
    "Oracle Cloud Foundations Certification",
    "Data Structures & Algorithms With JAVA",
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">B.Tech in Computer Science</h3>
                <p className="text-lg text-primary font-semibold mb-1">
                  AKTU (Dr. A.P.J. Abdul Kalam Technical University)
                </p>
                <p className="text-muted-foreground">Expected 2026</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Comprehensive curriculum covering software engineering, algorithms, system design, 
              and modern development practices.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex gap-4 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <Trophy className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
