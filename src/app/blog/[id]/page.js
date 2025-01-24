'use client';

import { useEffect, useState } from 'react';

export default function BlogDetailsPage({ params }) {
  const { id } = params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
