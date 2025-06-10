
import React from 'react';

const About = () => {
  const skills = [
    'Java',
    'Springboot',
    'AWS (EKS, ECS, RDS, Lambda, etc)',
    'Node.js',
    'Python',
    'FastAPI',
    'PostgreSQL',
    'Docker'
  ];

  return (
    <section id="about">
      <h2 className="section-heading">Sobre</h2>
      
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2">
          <div className="space-y-4">
            <p>
              Olá! Seja bem-vindo(a) ao meu portifolio!
            </p>
            
            <p>
              Tenho experiência prática com Java (Spring Boot) e Python (FastAPI), desenvolvendo APIs limpas e modulares em ambientes de microsserviços e serverless. Adoto princípios como SOLID, Arquitetura Limpa e DDD para manter o código sustentável, compreensível e pronto para evoluir.
            </p>
            
            <p>
              O que me motiva é construir software que faz sentido — que resolve problemas reais e melhora tanto a vida do usuário quanto de quem mantém o sistema. Gosto de trabalhar em times ágeis, com foco em qualidade de código, colaboração e melhoria contínua.
            </p>
            <p>
              Aqui estão algumas das tecnologias que venho utilizando no meu dia a dia:
            </p>
          </div>
          
          <ul className="grid grid-cols-2 gap-2 mt-6 text-sm font-mono">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center">
                <span className="text-portfolio-green mr-2">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative group">
          <div className="relative z-10 bg-portfolio-green rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Your Name"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="absolute top-6 left-6 w-full h-full border-2 border-portfolio-green rounded -z-10 group-hover:top-4 group-hover:left-4 transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
