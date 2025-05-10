
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowUpRight, FileText, Github } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("professional");

  const professionalProjects = [
    {
      title: "Global Sales Interface",
      description:
        "Developed ETL workflows to integrate Oracle/DB2 data into Salesforce for a global sales system.",
      technologies: ["Oracle", "DB2", "Salesforce", "ETL"]
      //link: "#",
    },
    {
      title: "Data Lake Project",
      description:
        "Implemented data conversion to Parquet format for AWS S3 ingestion and loading into Snowflake.",
      technologies: ["AWS S3", "Snowflake", "Parquet", "Python"],
      link: "#",
    },
    {
      title: "Impartner & Guest Account",
      description:
        "Designed filtered account data flow and tested compliance rules for account management.",
      technologies: ["Salesforce", "Security Compliance", "Data Filtering"],
      link: "#",
    },
  ];

  const academicProjects = [
    {
      title: "Malicious Smart App Detection",
      description:
        "Android malware classification system using hybrid machine learning approaches.",
      technologies: ["Python", "Machine Learning", "Android", "Security"],
      link: "#",
      github: "#",
    },
    {
      title: "RSA Implementation",
      description:
        "Built a Python RSA encryption system with digital signing capabilities.",
      technologies: ["Python", "Cryptography", "RSA", "Digital Signatures"],
      link: "#",
      github: "#",
    },
    {
      title: "Cybersecurity Risk Analysis in Cloud Computing",
      description:
        "Developed risk analysis frameworks using Event/Fault/Decision Trees for cloud security.",
      technologies: ["Risk Analysis", "Cloud Security", "Decision Trees"],
      link: "#",
    },
    {
      title: "Security Evaluation Projects",
      description:
        "Conducted security evaluations for CCTV systems, cryptocurrency mixers, and smart grid metering.",
      technologies: ["Security Assessment", "Privacy", "IoT Security"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section-container bg-secondary/30">
      <div className="container">
        <h2 className="section-heading">Projects</h2>

        <Tabs
          defaultValue="professional"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
          </TabsList>

          <TabsContent value="professional" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalProjects.map((project, index) => (
                <Card
                  key={index}
                  className="project-card border-muted bg-dark/50"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-muted/30 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <a
                      href={project.link}
                      className="text-accent flex items-center gap-1 hover:underline text-sm"
                    >
                      <FileText className="h-4 w-4" /> More..
                     <!-- <ArrowUpRight className="h-3 w-3 ml-1" /> -->
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="academic" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {academicProjects.map((project, index) => (
                <Card
                  key={index}
                  className="project-card border-muted bg-dark/50"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-muted/30 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex gap-4">
                    <a
                      href={project.link}
                      className="text-accent flex items-center gap-1 hover:underline text-sm"
                    >
                      <FileText className="h-4 w-4" /> Documentation
                      <ArrowUpRight className="h-3 w-3 ml-1" />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-muted-foreground flex items-center gap-1 hover:text-accent transition-colors text-sm"
                      >
                        <Github className="h-4 w-4" /> Code
                      </a>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
