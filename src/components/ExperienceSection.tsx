
import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "ETL Developer",
      company: "Tata Consultancy Services",
      period: "Sep. 2019 – Aug. 2023",
      responsibilities: [
        "Designed and deployed data pipelines using Oracle, DB2, and Salesforce",
        "Handled full/incremental loads, QA support, unit testing, and workflow documentation",
        "Worked with AWS S3, Snowflake, and Unix scripting in cloud-based Data Lake projects",
      ],
    },
  ];

  return (
    <section id="experience" className="section-container bg-secondary/30">
      <div className="container">
        <h2 className="section-heading">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-secondary border-muted overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 bg-dark p-6 flex flex-col justify-center">
                    <Briefcase className="h-8 w-8 text-accent mb-3" />
                    <h3 className="font-bold text-lg">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h4 className="text-lg font-medium mb-4">
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
