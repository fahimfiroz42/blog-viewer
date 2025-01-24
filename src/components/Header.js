'use client';

import { LoginLink, LogoutLink, useKindeAuth} from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';

export default function Header() {
  const { isAuthenticated } = useKindeAuth();

  return (
    <header className="bg-slate-900  p-4 ">
      <nav className="flex justify-between">
        <div>
          <Link href="/" className="px-4">
            Home
          </Link>
          <Link href="/profile" className="px-4">
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
