'use client';

import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { isAuthenticated, user } = useKindeAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/'); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Render nothing during redirect
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-slate-900 shadow-md rounded-lg w-full max-w-md p-6 text-center">
        <img
          src={user?.picture || '/default-avatar.png'} // Add a fallback image
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full border-2 border-gray-300"
        />
        <h1 className="mt-4 text-2xl font-semibold text-white">
          {user?.given_name && user?.family_name
            ? `${user.given_name} ${user.family_name}`
            : 'User Name'}
        </h1>
        <p className="text-gray-400">{user?.email || 'user@example.com'}</p>
        <div className="mt-6">
          <p className="text-gray-400">
            Welcome to your profile! Here you can manage your account and view personalized content.
          </p>
        </div>
      </div>
    </div>
  );
}
