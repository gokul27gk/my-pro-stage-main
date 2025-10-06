import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-foreground mb-1">
              Gokula Krishnan G
            </p>
            <p className="text-sm text-muted-foreground">
              Data Engineer & Web Developer
            </p>
          </div>

          <div className="flex items-center gap-3">
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

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Gokula Krishnan G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
