
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Work from '../components/sections/Work';
import Contact from '../components/sections/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
      
      {/* Footer */}
      <footer className="text-center py-12 border-t border-zinc-800">
        <p className="text-zinc-500 text-sm">
          Built with ❤️ using React & Tailwind CSS
        </p>
      </footer>
    </Layout>
  );
};

export default Index;
