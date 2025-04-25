import React from 'react';
import { CheckCircle, Clock, Users, Brain, MessageCircle, Zap } from 'lucide-react';

const SoftSkills: React.FC = () => {
  const softSkills = [
    {
      title: 'Fast Learner',
      description: 'Quickly adapts to new tools, technologies, and methodologies.',
      icon: <Brain className="text-purple-600" size={30} />,
      color: 'border-purple-400'
    },
    {
      title: 'Strong Communicator',
      description: 'Effectively conveys technical information to diverse audiences.',
      icon: <MessageCircle className="text-teal-600" size={30} />,
      color: 'border-teal-400'
    },
    {
      title: 'Handles Pressure',
      description: 'Maintains focus and effectiveness during tight deadlines and challenging situations.',
      icon: <Zap className="text-rose-600" size={30} />,
      color: 'border-rose-400'
    },
    {
      title: 'Team Player',
      description: 'Collaborates effectively with developers, designers, and stakeholders.',
      icon: <Users className="text-amber-600" size={30} />,
      color: 'border-amber-400'
    },
    {
      title: 'Detail-Oriented',
      description: 'Notices small details that others might miss, essential for thorough testing.',
      icon: <CheckCircle className="text-indigo-600" size={30} />,
      color: 'border-indigo-400'
    },
    {
      title: 'Efficient Scheduler',
      description: 'Manages time effectively to meet project deadlines and testing milestones.',
      icon: <Clock className="text-emerald-600" size={30} />,
      color: 'border-emerald-400'
    }
  ];

  return (
    <section id="soft-skills" className="section bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="section-title">
        <h2>Soft Skills</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => (
          <div 
            key={index} 
            className={`card p-6 border-l-4 ${skill.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="flex items-center mb-4">
              {skill.icon}
              <h3 className="text-xl font-semibold ml-3">{skill.title}</h3>
            </div>
            <p className="text-slate-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;