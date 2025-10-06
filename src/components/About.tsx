const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-6 text-center">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Enthusiastic and motivated <span className="font-semibold text-foreground">Information Technology graduate</span> with 
            a strong passion for software development, data engineering, and analytics. With hands-on experience in 
            building ETL pipelines, web applications, and data-driven solutions, I bring a unique blend of technical 
            expertise and creative problem-solving.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            Proficient in <span className="font-semibold text-foreground">Python, Java, SQL, Power BI, and modern web technologies</span>, 
            I've successfully delivered projects ranging from automated data extraction systems to blockchain-based 
            voting platforms. My experience spans across data processing, web scraping, cloud computing, and full-stack development.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            I thrive in dynamic, growth-oriented environments where I can apply my technical and analytical skills to 
            deliver innovative solutions that make a <span className="font-semibold text-foreground">real impact</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
