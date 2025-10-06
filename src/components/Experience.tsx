import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Positive Integers",
      role: "Data Engineer",
      location: "Chennai",
      period: "Jan 2025 – Jun 2025",
      description: [
        "Built and optimized ETL data pipelines using Python, SQL, and NoSQL (MongoDB) to handle millions of records",
        "Designed automated workflows for data extraction, cleaning, and transformation",
        "Implemented web scraping frameworks (BeautifulSoup, Scrapy) for API and website data extraction",
        "Utilized Pandas and NumPy for preprocessing and statistical transformations",
        "Worked with cloud storage solutions (AWS S3 / Google Cloud) for large dataset management",
        "Optimized SQL queries improving reporting efficiency",
        "Built data validation and monitoring scripts for pipeline stability",
        "Developed Power BI dashboards for stakeholder insights",
        "Collaborated in Agile/Scrum environment with sprint planning and code reviews"
      ],
      technologies: ["Python", "SQL", "MongoDB", "ETL", "Pandas", "NumPy", "BeautifulSoup", "Scrapy", "AWS S3", "Power BI"]
    },
    {
      company: "Nurture Infotech",
      role: "Web Developer",
      location: "Chennai",
      period: "Mar 2024 – Apr 2024",
      description: [
        "Designed and developed responsive web applications using HTML, CSS, JavaScript, and Java",
        "Implemented front-end UI components and server-side functionalities",
        "Worked with databases supporting CRUD operations and authentication",
        "Practiced agile development with version control (Git) and testing",
        "Delivered project modules within deadlines maintaining code quality"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Java", "Git", "Database Management"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Professional Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative animate-fade-in ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className={`p-8 professional-shadow hover:shadow-lg transition-shadow border relative ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-8 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow"
                    style={{
                      [index % 2 === 0 ? 'right' : 'left']: '-2.5rem'
                    }}
                  ></div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                      <p className="text-lg font-semibold text-primary mb-2">{exp.company}, {exp.location}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
