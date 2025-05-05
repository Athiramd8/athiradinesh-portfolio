import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const HeroSection: React.FC = () => {
  return <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-purple/40 to-transparent z-0"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Content */}
          <div className="w-full md:w-3/5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-accent">Athira Dinesh Mangaparambil</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6"> Building Scalable Pipelines &amp; Strengthening Digital Security</h2>
            <p className="text-lg mb-8 max-w-2xl">
              Experienced in building scalable ETL pipelines, performing data
              analysis, and developing secure data systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center gap-2 transition-transform hover:shadow-lg hover:shadow-accent/20">
                <FileText className="h-4 w-4" />
                View Resume
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a href="https://linkedin.com/in/athira-dinesh" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
              <Button variant="secondary" className="flex items-center gap-2" asChild>
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Picture */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glowing background effect */}
              <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-accent/30">
                <Avatar className="w-full h-full">
                  <AvatarImage src="https://i.postimg.cc/hPb0BVyt/My-photo.jpg" alt="Athira Dinesh Mangaparambil" className="object-cover w-full h-full" />
                  <AvatarFallback className="text-6xl font-bold">A</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-md"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
        
        {/* Tech icons or decorative elements could go here */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto opacity-70">
          {['ETL', 'Python', 'AWS', 'Security'].map((tech, index) => <div key={index} className="text-center px-4 py-2 rounded-lg bg-background/50 border border-accent/20">
              <span className="text-sm font-medium">{tech}</span>
            </div>)}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowRight className="h-5 w-5 rotate-90" />
        </a>
      </div>
    </section>;
};
export default HeroSection;