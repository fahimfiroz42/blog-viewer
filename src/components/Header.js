'use client';

import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';

const Header = () => {
  const { isAuthenticated, login, logout } = useKindeAuth();

  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
      </nav>
      <div>
        {isAuthenticated ? (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        ) : (
          <button onClick={login} className="bg-green-500 px-3 py-1 rounded">
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
