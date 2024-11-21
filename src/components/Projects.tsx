import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Customer Segmentation Analysis',
    description: 'Implemented K-means clustering to segment customers based on purchasing behavior, improving marketing campaign efficiency by 25%.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sales Prediction Model',
    description: 'Developed a time series forecasting model using ARIMA to predict monthly sales with 92% accuracy.',
    tech: ['Python', 'StatsModels', 'Pandas', 'Matplotlib'],
    image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sentiment Analysis Dashboard',
    description: 'Created an interactive dashboard for real-time sentiment analysis of customer feedback using NLP techniques.',
    tech: ['Python', 'NLTK', 'Streamlit', 'Plotly'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}