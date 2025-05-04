
import React from "react";
import { Book, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "Master's in Information Systems Security",
      institution: "Concordia University",
      location: "Montreal, QC",
      period: "Sep. 2023 – Dec. 2024",
      courses: [
        "Cryptography",
        "Network Security",
        "IoT Security",
        "Risk Analysis",
      ],
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Vignan's Institute of Information Technology",
      location: "India",
      period: "Jun. 2015 – May 2019",
      courses: [],
    },
  ];

  return (
    <section id="education" className="section-container">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-secondary border-muted overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 bg-dark p-6 flex flex-col justify-center">
                    <Book className="h-8 w-8 text-accent mb-3" />
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h4 className="text-lg font-medium">
                      {edu.institution}
                      <span className="text-muted-foreground">
                        , {edu.location}
                      </span>
                    </h4>
                    {edu.courses.length > 0 && (
                      <>
                        <h5 className="text-sm font-medium mt-4 mb-2 text-accent">
                          Relevant Coursework
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, idx) => (
                            <span
                              key={idx}
                              className="bg-muted px-3 py-1 rounded-full text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
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

export default EducationSection;
