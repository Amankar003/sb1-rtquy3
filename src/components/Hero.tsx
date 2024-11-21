import React from 'react';
import { Database, Brain, BarChart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600">Aman Kar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Data Scientist & ML Enthusiast
            </h2>
            <p className="text-gray-600 mb-8">
              Fresh Data Science graduate passionate about turning data into actionable insights. 
              Skilled in machine learning, statistical analysis, and data visualization.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get in Touch
              </a>
              <a href="#projects" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Projects
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Database className="text-blue-600 mb-2" size={32} />
              <h3 className="font-semibold mb-2">Data Analysis</h3>
              <p className="text-sm text-gray-600">Expert in extracting insights from complex datasets</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Brain className="text-blue-600 mb-2" size={32} />
              <h3 className="font-semibold mb-2">Machine Learning</h3>
              <p className="text-sm text-gray-600">Building intelligent solutions with ML algorithms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
              <BarChart className="text-blue-600 mb-2" size={32} />
              <h3 className="font-semibold mb-2">Data Visualization</h3>
              <p className="text-sm text-gray-600">Creating compelling visual stories from data</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}