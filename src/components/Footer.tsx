import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Aman Kar</h3>
            <p className="text-gray-400">Data Scientist & ML Engineer</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:aman.kar@example.com" className="hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-sm">
          © {new Date().getFullYear()} Aman Kar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}