import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gokulgkang004@gmail.com",
      link: "mailto:gokulgkang004@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8807977904",
      link: "tel:+918807977904"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://linkedin.com/in/gokula-krishnan"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Open to new opportunities, collaborations, and innovative projects. 
            Let's connect and create something impactful together.
          </p>
        </div>

        <Card className="p-8 md:p-12 professional-shadow-lg animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-border">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-md"
              asChild
            >
              <a href="mailto:gokulgkang004@gmail.com">
                <Send className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
