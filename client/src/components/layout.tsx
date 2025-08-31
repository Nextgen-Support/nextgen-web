import { ReactNode } from 'react';
import NewNavigation from './NewNavigation';
import Footer from './footer';
import BackToTop from './back-to-top';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <NewNavigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
