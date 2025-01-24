# Blog Viewer Application

A simple blog viewer application built with Next.js that demonstrates routing, server and client components, dynamic routes, authentication using Kinde, and data fetching.

---

## Features

- **Home Page**: Displays a list of blog posts fetched from a mock API with clickable links for detailed views.
- **Blog Details Page**: A dynamic route that displays individual blog post details.
- **Profile Page**: A protected page using Kinde authentication that redirects users to the login page if not authenticated.
- **Header Navigation**: Links to "Home" and "Profile" pages, with login/logout buttons depending on authentication status.
- **Responsive Design**: Styled with Tailwind CSS for a clean and responsive user interface.

---

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Kinde Auth](https://kinde.com/) for user authentication
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Mock API for blog posts:
  - `GET https://jsonplaceholder.typicode.com/posts` (fetch all posts)
  - `GET https://jsonplaceholder.typicode.com/posts/[id]` (fetch a specific post)

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-viewer.git
   cd blog-viewer
