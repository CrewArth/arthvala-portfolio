import { ThemeToggle } from "@/components/ThemeToggle";
import { Blob } from "@/components/Blob";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "ShapeShift.AI",
      description: "AI-powered image manipulation and enhancement platform.",
      technologies: ["Python", "TensorFlow", "Computer Vision", "React"],
    },
    {
      title: "ClassiVision",
      description: "Advanced image classification system using deep learning.",
      technologies: ["PyTorch", "CNN", "Machine Learning", "FastAPI"],
    },
    {
      title: "ACP.AI",
      description: "Automated content processing using artificial intelligence.",
      technologies: ["NLP", "Computer Vision", "AWS", "Django"],
    },
    {
      title: "ACDShopping",
      description: "E-commerce platform with AI-powered recommendations.",
      technologies: ["React", "Node.js", "Machine Learning", "MongoDB"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Blob />
      
      {/* Hero Section */}
      <section className="container flex min-h-screen flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          AI & Machine Learning Engineer specializing in Computer Vision and Deep Learning
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container py-24" id="projects">
        <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container py-24" id="skills">
        <h2 className="mb-12 text-center text-3xl font-bold">Technical Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Computer Vision",
            "Machine Learning",
            "Deep Learning",
            "Python",
            "TensorFlow",
            "PyTorch",
            "OpenCV",
            "React",
            "Node.js",
          ].map((skill) => (
            <div
              key={skill}
              className="flex items-center justify-center rounded-lg bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-24" id="contact">
        <h2 className="mb-12 text-center text-3xl font-bold">Get in Touch</h2>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;