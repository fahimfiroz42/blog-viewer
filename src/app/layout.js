'use client';

import './globals.css';
import Header from '../components/Header';
import { KindeProvider } from '@kinde-oss/kinde-auth-nextjs';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <KindeProvider>
          <main className='min-h-screen bg-slate-950'>
          <Header />
          {children}
          
          </main>
          <Footer/>
        </KindeProvider>
      </body>
    </html>
  );
}
