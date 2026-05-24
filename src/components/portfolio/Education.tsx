import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Trophy, Compass } from "lucide-react";

const Education = () => {
  const certifications = [
    {
      title: "GitHub Copilot Fundamentals",
      issuer: "GitHub",
      year: "2025",
    },
    {
      title: "Data Structures & Algorithms with Java",
      issuer: "Apna College",
      year: "2024",
    },
  ];

  const interests = [
    "Building software projects",
    "Exploring new frameworks and technologies",
    "Problem solving and algorithms",
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-primary/10 h-fit">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">B.Tech in Computer Science & Engineering</h3>
                  <p className="text-lg text-primary font-semibold mb-1">
                    Dr. A.P.J. Abdul Kalam Technical University (AKTU)
                  </p>
                  <p className="text-muted-foreground font-medium">2022 – 2026</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Focusing on core computer science subjects including Software Engineering, Database Systems, 
                Object-Oriented Design, and Algorithms. Shipped real-world full-stack systems during coursework.
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border flex justify-between items-center">
              <span className="text-muted-foreground font-medium">Academic Performance</span>
              <span className="text-xl font-bold text-primary">CGPA: 7.8 / 10</span>
            </div>
          </Card>

          {/* Certifications and Interests Card */}
          <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-accent/10 h-fit">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Certifications</h3>
                  <p className="text-sm text-muted-foreground">Professional credentials and courses</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <Trophy className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">{cert.title}</span>
                      <p className="text-xs text-muted-foreground">{cert.issuer} ({cert.year})</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-border space-y-4">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-primary" />
                <h4 className="font-bold text-foreground">Interests</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
