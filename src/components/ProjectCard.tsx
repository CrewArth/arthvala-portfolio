import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-primary/25">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
            >
              {tech}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}