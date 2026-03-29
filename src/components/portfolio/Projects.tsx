import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CarFront, Database, Mail, ShoppingCart, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Email Reply Generator",
      subtitle: "Spring Boot, MongoDB, React.js",
      icon: Mail,
      description:
        "Developing a full-stack AI-powered Email Reply Generator using React.js, Spring Boot, and MongoDB, integrating Google Gemini API with RESTful APIs and a responsive UI.",
      highlights: [
        "Developing real-time AI responses for better user interaction.",
        "Optimizing MongoDB queries and implementing JWT authentication.",
        "Building a scalable component-based architecture with dynamic state management.",
      ],
      technologies: ["React.js", "Spring Boot", "MongoDB", "JWT", "REST API", "MySQL"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "BMW Website Replica",
      subtitle: "React.js Application",
       icon: CarFront,
      description:
        "Built a fully responsive BMW website replica using React.js with 15+ reusable components, dynamic routing, lazy loading, and optimized rendering for a seamless user experience.",
      highlights: [
        "Improved app performance by 35% with efficient state management.",
        "Used code splitting for faster loading.",
        "Optimized rerendering for better performance.",
      ],
      technologies: ["React.js", "JavaScript", "CSS", "Component Design"],
      gradient: "from-orange-500 to-pink-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
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

export default Projects;
