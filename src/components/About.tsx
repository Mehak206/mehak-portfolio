import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="section-title">
        <h2>About Me</h2>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="card p-8 md:p-10">
          <p className="text-lg mb-6">
            As a passionate software testing professional, I bring a keen eye for detail and a methodical approach to quality assurance. My journey in the tech world has been driven by a fascination with finding bugs and ensuring flawless user experiences.
          </p>
          <p className="text-lg mb-6">
            I've developed expertise in both manual and automated testing methodologies, with a strong foundation in programming languages that allow me to create effective test scripts. My analytical mindset helps me anticipate potential issues before they arise, while my communication skills enable me to articulate technical problems clearly to development teams.
          </p>
          <p className="text-lg">
            I'm constantly expanding my knowledge of testing tools and frameworks, staying current with industry best practices. I take pride in being the final gatekeeper before software reaches users, ensuring that every product I test meets the highest standards of quality and reliability.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-purple-600 font-bold text-2xl md:text-3xl">3+</div>
              <div className="text-slate-600">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-purple-600 font-bold text-2xl md:text-3xl">6+</div>
              <div className="text-slate-600">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-purple-600 font-bold text-2xl md:text-3xl">10+</div>
              <div className="text-slate-600">Testing Tools</div>
            </div>
            <div className="text-center">
              <div className="text-purple-600 font-bold text-2xl md:text-3xl">5+</div>
              <div className="text-slate-600">Programming Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;