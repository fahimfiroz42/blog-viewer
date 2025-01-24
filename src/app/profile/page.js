'use client';

import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { isAuthenticated } = useKindeAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/'); // Redirect to home if not authenticated
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Render nothing during redirect
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to your profile!</h1>
      <p>This page is protected and requires authentication to view.</p>
    </div>
  );
}
