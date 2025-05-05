
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Phone } from "lucide-react";

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      title: "Email",
      value: "athiramd9608@gmail.com",
      link: "mailto:athiramd9608@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-accent" />,
      title: "LinkedIn",
      value: "linkedin.com/in/athira-dinesh",
      link: "https://linkedin.com/in/athira-dinesh",
    },
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      title: "Phone",
      value: "+1 438-779-7524",
      link: "tel:+14387797524",
    },
  ];

  return (
    <section id="contact" className="section-container bg-secondary/30">
      <div className="container">
        <h2 className="section-heading text-center">Contact</h2>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm currently <span className="text-accent font-medium">open to full-time roles in Canada</span>. Feel free to reach out if you have any questions or would like to discuss potential opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {contactInfo.map((item, index) => (
              <Card 
                key={index} 
                className="bg-secondary border-muted hover:border-accent transition-colors transform hover:-translate-y-1 duration-300 overflow-hidden"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-4 bg-accent/10 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    {item.title}
                  </h4>
                  <a
                    href={item.link}
                    className="font-medium text-foreground hover:text-accent transition-colors"
                    target={item.title === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Prefer to connect on social media? Find me on{" "}
              <a 
                href="https://linkedin.com/in/athira-dinesh" 
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
