
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Linkedin, Mail } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-purple/40 to-transparent z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-accent">Athira Dinesh Mangaparambil</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              ETL Developer & Aspiring Cybersecurity Analyst | Turning Data Into
              Actionable Insights
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              Experienced in building scalable ETL pipelines, performing data
              analysis, and developing secure data systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                View Resume
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://linkedin.com/in/athira-dinesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </Button>
              <Button
                variant="secondary"
                className="flex items-center gap-2"
                asChild
              >
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center mt-12 md:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-dark overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center bg-muted text-accent">
                  <span className="text-6xl font-bold">A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowRight className="h-5 w-5 rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
