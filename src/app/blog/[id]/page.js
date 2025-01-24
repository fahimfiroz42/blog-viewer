import Link from "next/link";

async function fetchPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
  }
  
  export default async function BlogDetailsPage({ params }) {
    const { id } = params;
    const post = await fetchPost(id);
  
    return (
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p>{post.body}</p>
        <Link href="/" className="text-blue-500 mt-4 inline-block">Back to Home</Link>
      </main>
    );
  }
  