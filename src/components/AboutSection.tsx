
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Zap, ArrowRight } from "lucide-react";

const AboutSection: React.FC = () => {
  const softSkills = [
    {
      name: "Analytical Thinking",
      icon: <Brain className="h-5 w-5" />,
      description:
        "Breaking down complex problems into manageable solutions through data-driven approaches.",
    },
    {
      name: "Clear Communication",
      icon: <Users className="h-5 w-5" />,
      description:
        "Translating technical concepts for diverse audiences and maintaining effective documentation.",
    },
    {
      name: "Adaptability",
      icon: <Zap className="h-5 w-5" />,
      description:
        "Quickly learning new technologies and adjusting to evolving project requirements.",
    },
  ];

  return (
    <section id="about" className="section-container bg-secondary/30">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg mb-6">
              I'm a data-driven problem solver with 4 years of ETL development
              experience at TCS. Now, with a Master's in Information Systems
              Security from Concordia, I'm transitioning into roles where data
              engineering meets cybersecurity. My strengths lie in data modeling,
              scripting, and governance, combined with a solid understanding of
              security standards and risk management.
            </p>
            <p className="text-lg mb-6">
              <span className="font-semibold text-accent">
                Currently open to full-time roles in Canada
              </span>{" "}
              in Data Engineering, ETL development, Data Analysis, and
              Cybersecurity (SOC Analyst/Junior Security Analyst).
            </p>
            <a
              href="#contact"
              className="text-accent flex items-center gap-1 font-medium hover:underline"
            >
              Let's connect <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <Card key={skill.name} className="bg-dark border-muted">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-accent/10 rounded-full text-accent">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
