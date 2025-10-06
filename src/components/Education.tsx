import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Technology in Information Technology",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai",
    period: "2021 - 2025",
    cgpa: "8.5 CGPA"
  };

  const certifications = [
    {
      title: "IBM Cloud Computing",
      issuer: "IBM",
      type: "Professional Certification"
    },
    {
      title: "Oracle Foundations Associate",
      issuer: "Oracle",
      type: "Professional Certification"
    },
    {
      title: "Cisco Networking Essentials",
      issuer: "Cisco",
      type: "Professional Certification"
    }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Education & Certifications</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="p-8 professional-shadow hover:shadow-lg transition-shadow animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{education.period}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-1">
                  {education.degree}
                </h4>
                <p className="text-primary font-medium">{education.institution}</p>
                <p className="text-sm text-muted-foreground">{education.location}</p>
              </div>
              
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-base py-1.5 px-4">
                {education.cgpa}
              </Badge>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-8 professional-shadow hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Certifications</h3>
                <p className="text-sm text-muted-foreground">Professional credentials</p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-background/50 border border-border hover:border-secondary/50 transition-colors"
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-secondary font-medium mb-1">{cert.issuer}</p>
                  <Badge variant="outline" className="text-xs">
                    {cert.type}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
