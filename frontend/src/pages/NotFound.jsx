import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <h1 className="text-6xl font-bold text-pink-600">404</h1>
      <p className="mt-4 text-gray-600">Page not found.</p>

      <Link
        to="/"
        className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
      >
        Back Home
      </Link>
    </div>
  );
}

export default NotFound;