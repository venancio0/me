
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, User, Briefcase, FolderOpen, MessageCircle, Globe } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState('en');

  const navItems = [
    { 
      href: '#about', 
      label: language === 'pt' ? '01. About' : '01. Sobre', 
      icon: User 
    },
    { 
      href: '#experience', 
      label: language === 'pt' ? '02. Experience' : '02. Experiência', 
      icon: Briefcase 
    },
    { 
      href: '#work', 
      label: language === 'pt' ? '03. Work' : '03. Trabalhos', 
      icon: FolderOpen 
    },
    { 
      href: '#contact', 
      label: language === 'pt' ? '04. Contact' : '04. Contato', 
      icon: MessageCircle
    },
  ];

  const socialLinks = [
    { href: 'https://github.com/venancio0', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/gabriel-venancio-b91484197/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:gabvcampaner@gmail.com', icon: Mail, label: 'Email' },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const sidebar = document.querySelector('.sidebar-container');
      if (sidebar) {
        const rect = sidebar.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const sidebarElement = document.querySelector('.sidebar-container');
    if (sidebarElement) {
      sidebarElement.addEventListener('mousemove', handleMouseMove);
      return () => sidebarElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'pt' : 'en');
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-2 rounded bg-zinc-900 text-yellow-400 border border-zinc-800"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        sidebar-container fixed lg:fixed top-0 left-0 h-full w-72 lg:w-20 bg-zinc-950
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        transition-transform duration-300 ease-in-out z-40
        flex flex-col items-center py-8 border-r border-zinc-800 relative overflow-hidden
      `}>
        {/* Mouse follow light effect */}
        <div 
          className="absolute pointer-events-none opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 193, 7, 0.15), transparent 40%)`,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
        />

        {/* Logo */}
        <div className="mb-12 relative z-10">
          <div className="w-12 h-12 border-2 border-yellow-400 rounded flex items-center justify-center">
            <span className="text-yellow-400 font-bold text-xl">GV</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 relative z-10">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block lg:hidden px-6 py-2 text-zinc-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-3"
                >
                  <item.icon size={20} />
                  {item.label}
                </a>
                <a
                  href={item.href}
                  className="hidden lg:flex w-12 h-12 rounded-full items-center justify-center text-zinc-500 hover:text-yellow-400 hover:bg-zinc-900/50 transition-all duration-300 relative group"
                  title={item.label}
                >
                  <item.icon size={20} />
                  <span className="absolute left-16 bg-zinc-900 text-zinc-300 px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-zinc-800">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Toggle */}
        <div className="mb-4 relative z-10">
          <button
            onClick={toggleLanguage}
            className="w-12 h-12 rounded-full flex items-center justify-center text-zinc-500 hover:text-yellow-400 hover:bg-zinc-900/50 transition-all duration-300 relative group"
            title={language === 'en' ? 'Switch to Portuguese' : 'Trocar para Inglês'}
          >
            <Globe size={20} />
            <span className="absolute left-16 bg-zinc-900 text-zinc-300 px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-zinc-800">
              {language === 'en' ? 'PT' : 'EN'}
            </span>
          </button>
        </div>

        {/* Social links */}
        <div className="space-y-4 relative z-10">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-12 h-12 rounded-full items-center justify-center text-zinc-500 hover:text-yellow-400 hover:bg-zinc-900/50 transition-all duration-300"
              title={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>

        {/* Email - Mobile only */}
        <div className="mt-8 lg:hidden relative z-10">
          <a
            href="mailto:gabvcampaner@gmail.com"
            className="text-yellow-400 text-sm tracking-widest"
          >
            gabvcampaner@gmail.com
          </a>
        </div>
      </aside>

      {/* Vertical email - Desktop only */}
      <div className="hidden lg:block fixed bottom-0 right-10 z-10">
        <div className="flex flex-col items-center">
          <a
            href="mailto:gabvcampaner@gmail.com"
            className="text-zinc-500 hover:text-yellow-400 transition-colors duration-300 text-sm tracking-widest"
            style={{ writingMode: 'vertical-rl' }}
          >
            gabvcampaner@gmail.com
          </a>
          <div className="w-px h-24 bg-zinc-700 mt-6"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
