
import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { href: 'https://github.com', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:your.email@example.com', icon: Mail, label: 'Email' },
  ];

  return (
    <section id="contact" className="text-center py-32">
      <div className="mb-8">
        <span className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium">
          What's Next?
        </span>
      </div>
      
      <h2 className="section-heading justify-center">Get In Touch</h2>
      
      <div className="max-w-2xl mx-auto">
        <h3 className="text-4xl md:text-5xl text-white mb-8 font-bold">
          Let's create something <span className="gradient-text">amazing</span> together
        </h3>
        
        <p className="mb-12 text-xl">
          I'm always interested in new opportunities and exciting projects. 
          Whether you have a question or just want to say hello, feel free to reach out!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a
            href="mailto:your.email@example.com"
            className="apple-button group"
          >
            <Mail size={16} className="mr-2" />
            Send Message
            <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-600 rounded-full transition-all duration-300"
          >
            Schedule a Call
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 hover:text-yellow-400 hover:border-zinc-700 transition-all duration-300 hover:scale-110"
              title={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
