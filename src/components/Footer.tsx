import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-dark py-10 border-t border-muted/20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="font-bold text-xl">
              <span className="text-accent">Athira</span> Dinesh Mangaparambil
            </h2>
            
          </div>

          <div className="flex space-x-6">
            <a href="mailto:athiramd9608@gmail.com" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/athira-dinesh" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com" className="text-muted-foreground hover:text-accent transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted/10 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Athira Dinesh Mangaparambil. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;