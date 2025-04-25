import React, { useEffect, useRef } from 'react';
import { Download, Github, Linkedin } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }> = [];

    const colors = ['#7322e7', '#17827d', '#ff4b2b'];

    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 2;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const dx = (Math.random() - 0.5) * 0.5;
      const dy = (Math.random() - 0.5) * 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particles.push({ x, y, radius, dx, dy, color });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 pb-8 px-6 md:px-12 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom right, #f7f3ff, #effcf9)' }}
      />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="mb-4">
              <span className="inline-block bg-purple-100/80 backdrop-blur-sm text-purple-600 px-4 py-2 rounded-full font-medium mb-4">
                Software Testing Professional
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Hi, I'm <span className="text-purple-600">Mehak</span>
            </h1>
            <div className="text-xl md:text-2xl text-slate-600 mb-8 h-20">
              <Typewriter
                options={{
                  strings: [
                    'A detail-driven Software Tester',
                    'Passionate about Quality Assurance',
                    'Creating flawless user experiences'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/mehak-resume.pdf" 
                className="btn btn-primary flex items-center gap-2 backdrop-blur-sm"
                download
                onClick={(e) => {
                  e.preventDefault();
                  alert('Resume download functionality would be implemented here!');
                }}
              >
                <Download size={18} />
                Download CV
              </a>
              <a 
                href="https://linkedin.com/in/mehak-arora" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline flex items-center gap-2 backdrop-blur-sm"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Mehak206" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary flex items-center gap-2 backdrop-blur-sm"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-purple-300/50 to-teal-300/50 rounded-full mx-auto animate-float backdrop-blur-sm"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-72 md:h-72 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-purple-600 text-5xl md:text-6xl font-bold mb-2">QA</div>
                  <div className="text-teal-500 text-xl md:text-2xl">Testing Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;