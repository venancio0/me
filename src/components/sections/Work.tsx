
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: 'EchoDev Newsletter',
      description: 'O EchoDev Newsletter é uma aplicação Spring Boot que permite aos administradores enviar e-mails com notícias sobre tecnologia aos usuários inscritos com uma única requisição de API. Criado com Java, Spring Boot e princípios SOLID, ele garante uma base de código limpa e de fácil manutenção.',
      tech: ['Java', 'Springboot', 'JavaMail', 'PostgreSQL', 'JavaScript'],
      github: 'https://https://github.com/venancio0/echodev-newsletter.com',
      image: '/echodev.png'
    },
    {
      title: 'Tech Challenge FIAP Póstech',
      description: 'Projeto Backend da Turma de Pós Graduação em Software Architecture da FIAP em 2024. Este projeto é um sistema de gerenciamento de pedidos desenvolvido para uma lanchonete em expansão. A solução de software é projetada para ser responsiva tanto em plataformas Web quanto Mobile. O backend, documentado e acessível via Swagger, permite uma administração eficiente e integrada dos pedidos, garantindo escalabilidade e facilidade de manutenção.',
      tech: ['Python', 'FastAPI', 'Kubernetes', 'PostgreSQL', 'Microsserviços'],
      github: 'https://github.com/software-architecture-fiap/tech-challenge',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
    },
    {
      title: 'Artigos Medium',
      description: 'Artigos no Medium sobre desenvolvimento backend, boas práticas de arquitetura e design patterns — uma forma de registrar aprendizados, me ajudar a estudar conceitos novos (sou do tipo que aprende escrevendo/fazendo), compartilhar experiências e, quem sabe, ajudar quem está trilhando um caminho parecido com o meu.',
      tech: ['Java', 'Spring', 'Python', 'Microsserviços', 'Clean Code'],
      external: 'https://medium.com/@gabvcampaner',
      image: 'https://slabstatic.com/prod/uploads/7cd8fe75/posts/images/ZYioF99U6Y4PLiKXk0-NyhS9.png'
    }
  ];

  return (
    <section id="work">
      <h2 className="section-heading">Projetos e artigos</h2>
      
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-12 gap-8 items-center ${
              index % 2 === 1 ? 'lg:text-right' : ''
            }`}
          >
            {/* Project image */}
            <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative group">
                <div className="bg-portfolio-green rounded overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-portfolio-green bg-opacity-30 rounded hover:bg-opacity-0 transition-all duration-300"></div>
              </div>
            </div>
            
            {/* Project info */}
            <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <p className="text-portfolio-green font-mono text-sm mb-2">Projeto</p>
              <h3 className="text-2xl text-portfolio-lightest-slate mb-4">{project.title}</h3>
              
              <div className="bg-portfolio-light-navy p-6 rounded shadow-lg mb-4">
                <p className="text-portfolio-light-slate">{project.description}</p>
              </div>
              
              <ul className={`flex flex-wrap gap-4 font-mono text-sm text-portfolio-light-slate mb-6 ${
                index % 2 === 1 ? 'lg:justify-end' : ''
              }`}>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-light-slate hover:text-portfolio-green transition-colors"
                    aria-label="Link para o repositório no Github"
                  >
                    <Github size={22} />
                  </a>
                )}

                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-light-slate hover:text-portfolio-green transition-colors"
                    aria-label="Link para o projeto"
                  >
                    <ExternalLink size={22} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
