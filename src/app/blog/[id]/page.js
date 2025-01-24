'use client';

import { useEffect, useState } from 'react';

export default function BlogDetailsPage({ params: paramsPromise }) {
  const [params, setParams] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await paramsPromise;
      setParams(resolvedParams);
    };

    unwrapParams();
  }, [paramsPromise]);

  useEffect(() => {
    if (!params) return;

    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [params]);

  if (!params || !post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
