
import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black">
      <Sidebar />
      <main className="lg:pl-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;
