import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, BarChart3, Globe, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & Scripting",
      color: "text-blue-500",
      skills: ["Python", "Java", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
      icon: Database,
      title: "Data Engineering",
      color: "text-purple-500",
      skills: ["ETL Pipelines", "Pandas", "NumPy", "Web Scraping", "BeautifulSoup", "Scrapy", "NoSQL", "MongoDB"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      color: "text-green-500",
      skills: ["Power BI", "Microsoft Excel", "Statistical Analysis", "Data Visualization"]
    },
    {
      icon: Globe,
      title: "Web Development",
      color: "text-orange-500",
      skills: ["Full Stack Development", "Front-end", "Back-end", "Responsive Design"]
    },
    {
      icon: Cloud,
      title: "Cloud & Platforms",
      color: "text-cyan-500",
      skills: ["AWS S3", "Google Cloud Storage", "IBM Cloud", "Oracle Foundations"]
    },
    {
      icon: Wrench,
      title: "Tools & Others",
      color: "text-pink-500",
      skills: ["GitHub", "Git", "Agile/Scrum", "Data Transformation", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Technical Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive expertise across data engineering, analytics, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 professional-shadow hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="bg-background/80 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
