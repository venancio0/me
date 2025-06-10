
import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Company One',
      position: 'Senior Software Engineer',
      duration: 'January 2023 - Present',
      responsibilities: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
      ]
    },
    {
      company: 'Company Two',
      position: 'Software Engineer',
      duration: 'May 2021 - December 2022',
      responsibilities: [
        'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more'
      ]
    },
    {
      company: 'Company Three',
      position: 'Junior Developer',
      duration: 'July 2020 - April 2021',
      responsibilities: [
        'Assisted in the development of a web application using React and Node.js',
        'Participated in code reviews and daily standups with senior developers',
        'Gained experience with modern development practices and version control'
      ]
    }
  ];

  return (
    <section id="experience">
      <h2 className="section-heading">Where I've Worked</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Tab buttons */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                px-6 py-3 text-left whitespace-nowrap border-l-2 md:border-l-2 md:border-b-0 border-b-2
                font-mono text-sm transition-all duration-300
                ${activeTab === index
                  ? 'border-portfolio-green text-portfolio-green bg-portfolio-light-navy'
                  : 'border-portfolio-lightest-navy text-portfolio-slate hover:text-portfolio-green hover:bg-portfolio-light-navy'
                }
              `}
            >
              {exp.company}
            </button>
          ))}
        </div>
        
        {/* Tab content */}
        <div className="flex-1">
          <div className="animate-fade-in-up">
            <h3 className="text-xl text-portfolio-lightest-slate mb-2">
              {experiences[activeTab].position}
              <span className="text-portfolio-green"> @ {experiences[activeTab].company}</span>
            </h3>
            <p className="text-portfolio-slate font-mono text-sm mb-6">
              {experiences[activeTab].duration}
            </p>
            <ul className="space-y-3">
              {experiences[activeTab].responsibilities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-portfolio-green mr-3 mt-2">▹</span>
                  <span className="text-portfolio-slate">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
