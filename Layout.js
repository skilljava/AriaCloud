import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGrid from '@/components/AnimatedGrid';

export default function Layout({ children }) {
  return (
    <div dir="rtl" className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap');
        
        :root {
          --color-orange: #F97316;
          --color-amber: #F59E0B;
          --color-dark: #0A0A0A;
        }
        
        * {
          font-family: 'Vazirmatn', system-ui, sans-serif;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #171717;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #F97316, #F59E0B);
          border-radius: 4px;
        }
        
        ::selection {
          background: rgba(249, 115, 22, 0.3);
          color: white;
        }
      `}</style>
      
      <AnimatedGrid />
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
