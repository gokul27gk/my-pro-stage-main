import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
              Gokula Krishnan 
            </h1>
            
            <p className="text-xl sm:text-2xl text-primary font-medium">
              Data Engineer & Web Developer
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
            Specializing in building scalable ETL pipelines, data-driven solutions, and full-stack web applications. 
            Experienced in Python, SQL, cloud technologies, and modern web frameworks with a proven track record 
            of delivering high-impact projects.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-md"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 shadow-sm"
              asChild
            >
              <a href="GOKULA KRISHNAN G RESUME.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-3 pt-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-muted"
              asChild
            >
              <a href="https://www.linkedin.com/in/gokula-krishnan-g-533000259/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-muted"
              asChild
            >
              <a href="https://github.com/gokul27gk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-muted"
              asChild
            >
              <a href="mailto:gokulgkang004@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: "0.7", label: "Years Experience" },
            { value: "4+", label: "Projects Completed" },
            { value: "3+", label: "Certifications" },
            { value: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
