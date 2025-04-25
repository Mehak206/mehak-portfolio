import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white py-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              Mehak<span className="text-teal-400">.dev</span>
            </a>
            <p className="mt-2 text-slate-300 max-w-md">
              A passionate software tester dedicated to ensuring quality and excellence in every project.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-purple-300">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-teal-300">Social Media</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://linkedin.com/in/mehak-arora" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/Mehak206" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="text-purple-400 mx-1" /> by Mehak | &copy; {currentYear} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;