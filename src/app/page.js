import Link from 'next/link';

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <p className="text-blue-600 hover:underline">{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
