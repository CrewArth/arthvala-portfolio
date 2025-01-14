import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  deployedUrl?: string;
}

export function ProjectCard({ title, description, technologies, deployedUrl }: ProjectCardProps) {
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
        <p className="text-muted-foreground mb-4">{description}</p>
        {deployedUrl && (
          <Button variant="outline" size="sm" asChild className="gap-2">
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              View Project
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}