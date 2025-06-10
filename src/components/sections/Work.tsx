
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: 'Featured Project One',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      tech: ['React', 'Styled Components', 'Express', 'Spotify API'],
      github: 'https://github.com',
      external: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
    },
    {
      title: 'Featured Project Two',
      description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2'],
      github: 'https://github.com',
      external: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
    },
    {
      title: 'Featured Project Three',
      description: 'A comprehensive course platform built with React and Node.js. Features include user authentication, course creation, video streaming, and progress tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      github: 'https://github.com',
      external: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="work">
      <h2 className="section-heading">Some Things I've Built</h2>
      
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
              <p className="text-portfolio-green font-mono text-sm mb-2">Featured Project</p>
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-light-slate hover:text-portfolio-green transition-colors"
                >
                  <Github size={22} />
                </a>
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-light-slate hover:text-portfolio-green transition-colors"
                >
                  <ExternalLink size={22} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
