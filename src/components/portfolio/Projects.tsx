import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Mail, TrendingUp, WifiOff, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "UPI Offline Mesh",
      subtitle: "Spring Boot, Cryptography (RSA + AES), Mesh Network",
      icon: WifiOff,
      description:
        "Built a Spring Boot backend simulating offline UPI payments over a peer-to-peer mesh network, where transactions hop device-to-device until reaching internet connectivity.",
      highlights: [
        "Implemented hybrid encryption (RSA + AES-GCM) to secure transaction payloads across untrusted intermediate nodes.",
        "Added idempotency using ciphertext hashing to prevent double-spending and ensure exactly-once settlement.",
        "Designed a gossip protocol simulation with a web dashboard to visualize transaction hops across the mesh network.",
      ],
      technologies: ["Spring Boot", "Java 17", "Cryptography (RSA/AES)", "Mesh Networking", "H2 Database", "Thymeleaf"],
      gradient: "from-emerald-500 to-green-500",
      githubUrl: "https://github.com/thevishessh/UPI-without-internet",
    },
    {
      title: "AI Email Reply Generator",
      subtitle: "Spring Boot, React.js, MongoDB, Google Gemini API",
      icon: Mail,
      description:
        "Built a full-stack web application that automatically generates context-aware email replies utilizing the Google Gemini API with customizable prompt settings for tone and layout.",
      highlights: [
        "Built a full-stack web app that generates context-aware email replies using Google Gemini API with custom prompt templates for tone (formal, casual, assertive).",
        "Designed a dual-layer prompt architecture — a system-level context prompt combined with a user instruction layer — to produce accurate, non-generic AI responses.",
        "Implemented JWT-based authentication with Spring Boot and Google OAuth2 login for secure session management.",
        "Stored user history and reply preferences in MongoDB to enable personalized response generation across sessions.",
      ],
      technologies: ["React.js", "Spring Boot", "MongoDB", "Google Gemini API", "JWT", "OAuth2", "Tailwind CSS"],
      gradient: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com/thevishessh",
    },
    {
      title: "Job Application Tracker API",
      subtitle: "Spring Boot, REST APIs, JWT, MySQL",
      icon: Database,
      description:
        "Designed and implemented a secure, high-performance RESTful API from scratch to track and analyze job applications across multiple pipeline stages.",
      highlights: [
        "Built a RESTful API from scratch to track job applications across multiple stages — Applied, Interview, Rejected, Offer — with full CRUD operations across 5 endpoints.",
        "Implemented JWT-based authentication with per-user data isolation, ensuring each user can only access and manage their own applications.",
        "Developed a statistics endpoint returning real-time metrics — total applications, interview conversion rate, and offer rate — per user.",
        "Deployed on Render; documented all endpoints using Postman collection.",
      ],
      technologies: ["Spring Boot", "REST APIs", "JWT Authentication", "MySQL", "Spring Security", "Postman", "Render"],
      gradient: "from-teal-500 to-emerald-500",
      githubUrl: "https://github.com/thevishessh",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50 flex flex-col justify-between h-full"
            >
              <div>
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                        aria-label="View Source Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
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
