import React from 'react';
import { Code, Database, Terminal, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={36} className="text-purple-600" />,
      skills: ['C++', 'C', 'Java', 'Python', 'PHP', 'JavaScript (Basics)'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Frameworks',
      icon: <Terminal size={36} className="text-teal-600" />,
      skills: ['HTML', 'CSS', 'Bootstrap', 'NodeJS'],
      color: 'from-teal-500 to-emerald-500'
    },
    {
      title: 'Tools',
      icon: <Wrench size={36} className="text-rose-600" />,
      skills: ['MySQL', 'Selenium', 'Eclipse', 'IntelliJ', 'Visual Studio'],
      color: 'from-rose-500 to-pink-500'
    },
    {
      title: 'Testing',
      icon: <Database size={36} className="text-amber-600" />,
      skills: ['Manual Testing', 'Automated Testing', 'Test Cases', 'Bug Reporting', 'User Acceptance Testing'],
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="section-title">
        <h2>Skills & Tools</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="card hover:scale-102 transition-transform duration-300 overflow-hidden">
            <div className={`h-2 w-full bg-gradient-to-r ${category.color}`}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-2`}></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;