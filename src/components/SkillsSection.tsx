
import React from "react";
import { Database, FileCode, Shield, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Data Engineering",
      icon: <Database className="h-6 w-6" />,
      skills: [
        "SQL",
        "Python",
        "Spark",
        "Databricks",
        "Airflow",
        "Snowflake",
        "Redshift",
        "AWS",
      ],
    },
    {
      title: "ETL/ELT Development",
      icon: <FileCode className="h-6 w-6" />,
      skills: [
        "DB2",
        "Oracle",
        "Salesforce",
        "Batch Processing",
        "Stream Processing",
      ],
    },
    {
      title: "Security & Cyber Skills",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        "Threat Risk Assessment",
        "Incident Response",
        "IAM",
        "Encryption (RSA, AES, TLS)",
        "SOC Monitoring",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Code className="h-6 w-6" />,
      skills: ["GitHub", "Linux", "Jenkins", "CI/CD", "Tableau", "Power BI"],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="container">
        <h2 className="section-heading">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-secondary border-muted">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-accent/10 rounded-full text-accent mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="skill-badge hover:bg-accent/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
