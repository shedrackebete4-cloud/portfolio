import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage } from "@/components/project-page";

export const Route = createFileRoute("/work/$id")({ component: ProjectPage });
