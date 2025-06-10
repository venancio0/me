
import React from 'react';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'PostgreSQL'
  ];

  return (
    <section id="about">
      <h2 className="section-heading">About Me</h2>
      
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2">
          <div className="space-y-4">
            <p>
              Hello! My name is Your Name and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught me 
              a lot about HTML & CSS!
            </p>
            
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and a student-led design studio. My main focus these 
              days is building accessible, inclusive products and digital experiences for a variety 
              of clients.
            </p>
            
            <p>
              Here are a few technologies I've been working with recently:
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
