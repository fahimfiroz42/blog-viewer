'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data.slice(0, 10)); // Fetch only the first 10 posts
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-slate-900 rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow"
          >
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.body.slice(0, 100)}...</p>
            </div>
            <Link href={`/blog/${post.id}`}>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
