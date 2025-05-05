
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
    <section id="contact" className="section-container">
      <div className="container">
        <h2 className="section-heading">Contact</h2>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <p className="text-muted-foreground mb-8">
            I'm currently <span className="text-accent">open to full-time roles in Canada</span>. Feel free to reach out if you have any questions or would like to discuss potential opportunities.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="bg-secondary border-muted hover:border-accent/50 transition-colors">
                <CardContent className="p-4 flex items-center">
                  <div className="p-2 bg-accent/10 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground">
                      {item.title}
                    </h4>
                    <a
                      href={item.link}
                      className="font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
