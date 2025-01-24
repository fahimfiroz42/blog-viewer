'use client';

import { LoginLink, LogoutLink, useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { isAuthenticated } = useKindeAuth();
  const router = useRouter();

  const handleProfileClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault(); // Prevent the default navigation
      router.push('/api/auth/login'); // Redirect to login page
    }
  };

  return (
    <header className="bg-slate-900 text-white  p-4">
      <nav className="flex justify-between text-white items-center ">
        <div>
          <h1 className="text-xl font-bold">Blogify</h1>
        </div>
        <div>
          <Link href="/" className="px-4">
            Home
          </Link>
          <Link href="/profile" onClick={handleProfileClick} className="px-4">
            Profile
          </Link>
        </div>
        <div>
          {isAuthenticated ? (
            <LogoutLink>
              <button className="bg-blue-500 rounded-3xl text-white px-4 py-2">Logout</button>
            </LogoutLink>
          ) : (
            <LoginLink>
              <button className="bg-blue-500 rounded-3xl text-white px-4 py-2">Login</button>
            </LoginLink>
          )}
        </div>
      </nav>
    </header>
  );
}
