import React from 'react';

const skills = {
  'Programming Languages': ['Python', 'R', 'SQL'],
  'Machine Learning': ['Scikit-learn', 'TensorFlow', 'PyTorch'],
  'Data Analysis': ['Pandas', 'NumPy', 'SciPy'],
  'Visualization': ['Matplotlib', 'Seaborn', 'Plotly'],
  'Tools': ['Jupyter', 'Git', 'Docker'],
  'Soft Skills': ['Problem Solving', 'Communication', 'Team Collaboration']
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
              <div className="space-y-2">
                {items.map((skill) => (
                  <div key={skill} className="bg-white p-2 rounded shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}