'use client';

import './globals.css';
import Header from '../components/Header';
import { KindeProvider } from '@kinde-oss/kinde-auth-nextjs';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <KindeProvider>
          <Header />
          {children}
        </KindeProvider>
      </body>
    </html>
  );
}
