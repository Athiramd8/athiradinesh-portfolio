
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsLoading(false);
    }, 1000);
  };

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
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm currently <span className="text-accent">open to full-time roles in Canada</span>. Feel free to reach out if you have any questions or would like to discuss potential opportunities.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-secondary border-muted">
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
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-secondary border-muted focus:border-accent"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-secondary border-muted focus:border-accent"
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-secondary border-muted focus:border-accent"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-secondary border-muted focus:border-accent min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
