"use client";

import React, { ReactNode } from 'react';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import ScrollToTopButton from './ScrollToTopButton';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="layout">
      <div className="background-wrapper">
        <div className="dotted-background" />
      </div>
      <div className="min-h-screen">
        <Header />
        <Container
          className={`flex-grow flex justify-center items-center overflow-auto min-h-[calc(100vh-(100px+100px))]`}
        >
          {children}
          <ScrollToTopButton />
        </Container>
        {!isHomePage && (
          <footer className="py-6">
            <Footer />
          </footer>
        )}
      </div>
    </div>
  );
};

export default Layout; 