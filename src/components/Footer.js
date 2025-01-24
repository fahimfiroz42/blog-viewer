export default function Footer() {
    return (
      <footer className="bg-slate-900 text-white p-6 mt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Column 1: About */}
          <div>
            <h2 className="text-xl font-semibold mb-3">About Us</h2>
            <p className="text-sm text-gray-400">
              We are a blog platform bringing you the latest articles on various topics. Follow us for more updates!
            </p>
          </div>
  
          {/* Column 2: Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
  
          {/* Column 3: Social Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
            <div className="space-x-4">
              <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
              <a href="https://facebook.com" className="hover:text-blue-600">Facebook</a>
              <a href="https://instagram.com" className="hover:text-pink-500">Instagram</a>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
          &copy; 2025 Blog Platform. All rights reserved.
        </div>
      </footer>
    );
  }
  