import { notFound } from "next/navigation";

import ProjectDetails from "../../../components/projects/ProjectDetails";
import PTCSCaseStudy from "../../../components/projects/PTCSCaseStudy";

import {
  getProjectBySlug,
  projects,
} from "../../../data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const projectTitle = slug === "ptcs"
    ? "PTCS | Karachi Electric Bus Routes"
    : `${project.title} | React Native Frontend Project`;

  return {
    title: projectTitle,

    description:
      project.shortDescription,

    keywords: [
      project.title,
      "React Native Frontend Developer",
      "React Native Project",
      "Mobile App Development",
      "JavaScript",
      "React Native CLI",
      "Mobile UI",
      "React Navigation",
      "Frontend Development",
    ],

    openGraph: {
      title: projectTitle,

      description:
        project.shortDescription,

      type: "website",
    },
  };
}

export default async function ProjectPage({
  params,
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (slug === "ptcs") {
    return <PTCSCaseStudy />;
  }

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const nextProject =
    projects.length > 1
      ? projects[
          (projectIndex + 1) %
            projects.length
        ]
      : null;

  return (
    <ProjectDetails
      project={project}
      nextProject={nextProject}
    />
  );
}
