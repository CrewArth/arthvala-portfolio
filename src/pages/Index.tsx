import { ThemeToggle } from "@/components/ThemeToggle";
import { Blob } from "@/components/Blob";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const Index = () => {
  const projects = [
    {
      title: "ShapeShift.AI",
      description: "Transforms Text & 2D Image into 3D Models.",
      technologies: ["NextJS", "ReactJS", "NodeJS", "MongoDB"],
    },
    {
      title: "ClassiVision",
      description: "Web Tool to Train CNN Model with ease.",
      technologies: ["PyTorch", "CNN", "Machine Learning", "FastAPI"],
    },
    {
      title: "ACP.AI",
      description: "AI Platform to generate Text, Image & Videos using AI.",
      technologies: ["NLP", "Computer Vision", "AWS", "Django"],
    },
    {
      title: "ACDShopping",
      description: "E-commerce platform.",
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
          Hi, I'm{" "}
          <TypeAnimation
            sequence={[
              "Arth Vala",
              1000,
              "",
              500,
            ]}
            wrapper="span"
            speed={50}
            className="text-primary"
            repeat={Infinity}
          />
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          AI & Computer Vision Enthusiast specializing in Deep Learning & Machine Learning.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="files/arthvala-resume.pdf" download>
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
            "NLP",
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
            <a href="mailto:arthvala@gmail.com">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com/in/arthvala" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/CrewArth" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;