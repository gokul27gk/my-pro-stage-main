import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: FileText,
      title: "Probus Insurance Royal Sundaram",
      description: "Successfully automated premium data extraction for Royal Sundaram via Probus Insurance using Selenium and Beautiful Soup. Handled dynamic form submissions, XPath-based data parsing, and multi-car/RTO iterations.",
      achievements: [
        "Efficient CSV output generation with robust error handling",
        "Accurate data capture significantly reducing manual effort",
        "Improved data reliability through automated validation"
      ],
      technologies: ["Python", "Selenium", "Beautiful Soup", "XPath", "Data Extraction", "CSV Processing"],
      link: "#"
    },
    {
      icon: Shield,
      title: "Multipurpose Online Voting Platform",
      description: "Built a secure, transparent, and tamper-proof voting platform using blockchain technology. Enabled remote participation, real-time results, and multi-election support.",
      achievements: [
        "Blockchain-based security eliminating voting fraud",
        "Remote participation with real-time result tracking",
        "Strong scalability and user authentication system",
        "Demonstrated reliability for modern digital voting needs"
      ],
      technologies: ["Blockchain", "Web Development", "Security", "Authentication", "Real-time Systems"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Delivering innovative solutions in data automation, security, and web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 professional-shadow hover:shadow-lg transition-shadow animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <project.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-sm text-foreground/80">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto">
                <Button variant="outline" className="w-full hover-lift" asChild>
                  <a href={project.link}>
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
