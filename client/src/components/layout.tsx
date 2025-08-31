import { ReactNode } from 'react';
import NewNavigation from './NewNavigation';
import Footer from './footer';
import BackToTop from './back-to-top';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed" 
         style={{ backgroundImage: 'url(/bg.png)' }}>
      <div className="absolute inset-0 bg-black/30 -z-10" />
      <NewNavigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
