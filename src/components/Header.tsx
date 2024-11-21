import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Aman Kar
        </h1>
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
}