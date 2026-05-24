import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srivastavavishesh1505@gmail.com",
      link: "mailto:srivastavavishesh1505@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9335733595",
      link: "tel:+919335733595",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lucknow, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "vishesh-srivastava",
      link: "https://www.linkedin.com/in/vishesh-srivastava-b989312a8/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "thevishessh",
      link: "https://github.com/thevishessh",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm currently looking for new opportunities and collaborations. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <Card className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Contact Information</h3>
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="font-medium hover:text-primary transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium break-words">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">Find Me Online</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group min-w-0"
                    >
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors flex items-center gap-1 text-sm break-all">
                          {item.value}
                          <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Send a Message</h3>
              <ContactForm />
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                <a href="mailto:srivastavavishesh1505@gmail.com">
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                <a href="https://www.linkedin.com/in/vishesh-srivastava-b989312a8/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                <a href="/Vishesh Resume.pdf" download="Vishesh Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <p className="text-center text-muted-foreground mt-12">
          Designed & Developed by Vishesh Srivastava
        </p>
      </div>
    </section>
  );
};

export default Contact;
